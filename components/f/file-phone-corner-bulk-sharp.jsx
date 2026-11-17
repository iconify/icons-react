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
		"content": `<style>.alde5l8gu {
  d: path("m13.707 2.293l6 6A1 1 0 0 1 19 10h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 1.698-.716l.009.008ZM16.586 8L14 5.414V8ZM12 13a1 1 0 0 1 1-1h2.667a1 1 0 0 1 .928.629l.889 2.222a1 1 0 0 1-.221 1.078l-.627.627l.808.808l.627-.627a1 1 0 0 1 1.078-.221l2.222.889a1 1 0 0 1 .629.928V21a1 1 0 0 1-1 1h-.889A8.11 8.11 0 0 1 12 13.889Z");
}

.bjexm-byy {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13 2c.265 0 .52.105.707.293l6 6A1 1 0 0 1 19 10h-9v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm0 6h4l-4-4Z");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="bjexm-byy"/><path class="alde5l8gu"/></g>`,
		"fallback": "coolicons:file-phone-corner-bulk-sharp",
	});
}

export default Component;
