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
		"content": `<style>.prdhn14yo {
  fill: currentColor;
  d: path("M5.353 4.523a3 3 0 0 0-2.28 3.578l.09.4h13.015l-.699-3.15a3 3 0 0 0-3.578-2.28zM4.525 14.65l-.698-3.15h13.016l.088.4a3 3 0 0 1-2.28 3.577L8.105 16.93a3 3 0 0 1-3.579-2.28M1 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 10m5 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 6 10m5.5-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm4.5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5");
}
</style><path class="prdhn14yo"/>`,
		"fallback": "fluent:align-straighten-20-filled",
	});
}

export default Component;
