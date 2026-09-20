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
		"content": `<style>.alnintyhh {
  fill: currentColor;
  d: path("M9.293 6.293A1 1 0 1 1 10 8H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7.048a5 5 0 0 0-8.535-3.583a2 2 0 1 0 2.828 2.828M8 14h4a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1");
}
</style><path class="alnintyhh"/>`,
		"fallback": "fluent:door-tag-20-filled",
	});
}

export default Component;
