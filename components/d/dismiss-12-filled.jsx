import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.btufojjeh {
  fill: currentColor;
  d: path("m1.897 2.054l.073-.084a.75.75 0 0 1 .976-.073l.084.073L6 4.939l2.97-2.97a.75.75 0 1 1 1.06 1.061L7.061 6l2.97 2.97a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L6 7.061l-2.97 2.97A.75.75 0 1 1 1.97 8.97L4.939 6l-2.97-2.97a.75.75 0 0 1-.072-.976l.073-.084z");
}
</style><path class="btufojjeh"/>`,
		"fallback": "fluent:dismiss-12-filled",
	});
}

export default Component;
