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
		"content": `<style>.lz2713b-k {
  fill: currentColor;
  d: path("M15.54 5.54L13.77 7.3L12 5.54L10.23 7.3L8.46 5.54L12 2zm2.92 10l-1.76-1.77L18.46 12l-1.76-1.77l1.76-1.77L22 12zm-10 2.92l1.77-1.76L12 18.46l1.77-1.76l1.77 1.76L12 22zm-2.92-10l1.76 1.77L5.54 12l1.76 1.77l-1.76 1.77L2 12z");
}

.v4i2ew1ke {
  cx: 12px;
  cy: 12px;
  r: 3px;
  fill: currentColor;
}
</style><path class="lz2713b-k"/><circle class="v4i2ew1ke"/>`,
		"fallback": "ic:baseline-control-camera",
	});
}

export default Component;
