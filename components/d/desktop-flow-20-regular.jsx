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
		"content": `<style>.aa59nhb2z {
  fill: currentColor;
  d: path("M14.085 2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3v2H5.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H13v-2h3a2 2 0 0 0 2-2V7h-1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10v-.5q.001-.264.085-.5M12 17H8v-2h4zm3-14.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V5h-.78a.5.5 0 0 0-.474.342l-.544 1.632A1.5 1.5 0 0 1 11.78 8H11v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h.78a.5.5 0 0 0 .474-.342l.544-1.632A1.5 1.5 0 0 1 14.22 4H15zM10 7H8v2h2zm6-2h2V3h-2z");
}
</style><path class="aa59nhb2z"/>`,
		"fallback": "fluent:desktop-flow-20-regular",
	});
}

export default Component;
