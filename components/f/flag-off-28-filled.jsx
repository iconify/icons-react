import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hs0q6-bxi {
  fill: currentColor;
  d: path("m2.397 1.554l.073-.084a.75.75 0 0 1 .976-.073l.084.073l20 20a.75.75 0 0 1-.976 1.133l-.084-.073L17.938 18H5.5v6.25a.75.75 0 0 1-1.493.102L4 24.25L3.999 4.06l-1.53-1.53a.75.75 0 0 1-.072-.976l.073-.084zM7.06 2.999L23.25 3a.75.75 0 0 1 .683 1.06l-.048.09l-3.999 6.35l3.999 6.35a.75.75 0 0 1-.533 1.143L23.25 18h-1.189z");
}
</style><path class="hs0q6-bxi"/>`,
		"fallback": "fluent:flag-off-28-filled",
	});
}

export default Component;
