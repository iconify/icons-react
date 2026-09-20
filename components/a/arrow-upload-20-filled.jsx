import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ui_lrlbjj {
  fill: currentColor;
  d: path("M4.5 2a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 2zm5.996 15.35a.75.75 0 0 1-1.493-.102V7.058L6.03 10.027l-.084.073a.75.75 0 0 1-.976-1.134L9.26 4.68a.7.7 0 0 1 .257-.146l.08-.023a.7.7 0 0 1 .151-.016l.06.002l.07.008l.12.03l.091.038l.037.02l.09.06l.072.062l4.242 4.25l.073.085a.75.75 0 0 1-.074.976l-.084.073a.75.75 0 0 1-.976-.074l-2.966-2.97v10.193z");
}
</style><path class="ui_lrlbjj"/>`,
		"fallback": "fluent:arrow-upload-20-filled",
	});
}

export default Component;
