import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.he_c82wfc {
  d: path("M15.84 2.661a2.25 2.25 0 0 0-3.19-.023l-9.598 9.508a2.25 2.25 0 0 0 .007 3.204l5.1 5.008a2.25 2.25 0 0 0 3.175-.023l.215-.217a6.5 6.5 0 0 1-.478-1.65l-.803.812a.75.75 0 0 1-1.059.008L4.11 14.28a.75.75 0 0 1-.002-1.068l1.529-1.515l5.377 5.377a6.5 6.5 0 0 1 .362-1.759l-4.673-4.673l7.003-6.938a.75.75 0 0 1 1.064.007l4.91 5.009a.75.75 0 0 1-.003 1.052l-1.276 1.29c.58.08 1.135.237 1.655.46l.687-.695a2.25 2.25 0 0 0 .008-3.158z");
}

.wn3t3obty {
  d: path("M19.289 12.297A5.5 5.5 0 1 1 17.473 12m.027 0a5.5 5.5 0 0 1 1.789.297Zm0 0h-.027Z");
}
</style><g class="cuyn6tgcc"><path class="he_c82wfc"/><path class="wn3t3obty"/></g>`,
		"fallback": "fluent:eraser-medium-24-regular",
	});
}

export default Component;
