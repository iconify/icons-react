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
		"content": `<style>.h0-ocf7pd {
  fill: currentColor;
  d: path("M10 10v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h8c.265 0 .52.105.707.293l6 6A1 1 0 0 1 19 10Zm3-2h4l-4-4Zm-1 5.889V13a1 1 0 0 1 1-1h2.667a1 1 0 0 1 .928.629l.889 2.222a1 1 0 0 1-.221 1.078l-.627.627l.808.808l.627-.627a1 1 0 0 1 1.078-.221l2.222.889a1 1 0 0 1 .629.928V21a1 1 0 0 1-1 1h-.889A8.11 8.11 0 0 1 12 13.889");
}
</style><path class="h0-ocf7pd"/>`,
		"fallback": "coolicons:file-phone-corner-fill-sharp",
	});
}

export default Component;
