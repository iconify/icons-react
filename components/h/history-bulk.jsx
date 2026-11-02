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
		"content": `<style>.c54zq2pps {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3.056 12a8.946 8.946 0 1 1 17.89 0a8.946 8.946 0 1 1-17.89 0");
}

.cuyn6tgcc {
  fill: currentColor;
}

.rr_ij0s4i {
  d: path("M5.826 7H8a1 1 0 0 1 0 2H4a1 1 0 0 1-1-.986V4a1 1 0 0 1 2 0v.937c3.895-3.86 10.179-3.839 14.047.047s3.862 10.17-.015 14.048a9.938 9.938 0 0 1-15.926-2.585a1 1 0 1 1 1.788-.894A7.946 7.946 0 1 0 5.826 7M13 8v3.586l2.707 2.707a.999.999 0 1 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V8a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="c54zq2pps"/><path class="rr_ij0s4i"/></g>`,
		"fallback": "coolicons:history-bulk",
	});
}

export default Component;
