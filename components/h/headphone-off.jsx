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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ngxdn5ure {
  d: path("M17.88 15.069a1 1 0 0 1-1.898-.63a10.4 10.4 0 0 0 .518-3.273c0-4.456-2.756-7.412-6.5-7.412S3.5 6.71 3.5 11.166c0 1.14.178 2.247.518 3.273a1 1 0 0 1-1.898.63a12.4 12.4 0 0 1-.62-3.903c0-5.53 3.619-9.412 8.5-9.412s8.5 3.882 8.5 9.412c0 1.354-.212 2.673-.62 3.903");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}

.za5ig0byw {
  d: path("M5.977 17.034a3 3 0 0 1-2.942-3.04v-.022a2.98 2.98 0 0 1 3.035-2.937a1 1 0 0 1 .98 1.013l-.054 4a1 1 0 0 1-1.019.986M14.089 11a3 3 0 0 1 2.942 3.04v.022A2.98 2.98 0 0 1 14.013 17h-.016a1 1 0 0 1-.981-1.014l.054-4A1 1 0 0 1 14.089 11");
}
</style><g class="cuyn6tgcc"><path class="ngxdn5ure"/><path class="za5ig0byw"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:headphone-off",
	});
}

export default Component;
