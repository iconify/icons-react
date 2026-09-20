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
		"content": `<style>.yvnj02bby {
  fill: currentColor;
  d: path("m16.858 13.362l.705 3.528a2.25 2.25 0 0 0 1.821 1.775l2.872.5a2.75 2.75 0 0 0 3.15-2.091l.378-1.636c.485-2.101-.383-4.406-2.536-5.25c-2.107-.826-5.28-1.7-9.25-1.688c-3.948.013-7.107.877-9.212 1.692c-2.17.839-3.052 3.154-2.564 5.27l.372 1.612a2.75 2.75 0 0 0 3.15 2.09l2.872-.499a2.25 2.25 0 0 0 1.821-1.775l.706-3.528c.162-.038.363-.082.591-.125C12.366 13.117 13.19 13 14 13s1.635.117 2.266.237c.229.043.43.087.592.125");
}
</style><path class="yvnj02bby"/>`,
		"fallback": "fluent:call-end-28-filled",
	});
}

export default Component;
