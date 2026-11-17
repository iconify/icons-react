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
		"content": `<style>.auxv78bvd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 7c-1 0-1.5-.2-1-1l1-2c.5-1 1-1 2-1h8c1 0 1.5 0 2 1l1 2c.5.8 0 1-1 1Zm0 0l1 12c.1 1.2.8 2 2 2h6c1.2 0 1.9-.8 2-2l1-12M7 12h10M7 16h10");
}

.ft5dv1b6b {
  fill: none;
}

.xcajy91sf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 7c-.722 0-1.583-.066-1-1l1-2c.494-.988.991-1 2-1h8c1.009 0 1.506.012 2 1l1 2c.583.934-.278 1-1 1Zm1 5h10v4H7Z");
}
</style><g class="ft5dv1b6b"><path class="xcajy91sf"/><path class="auxv78bvd"/></g>`,
		"fallback": "coolicons:coffee-to-go-duotone",
	});
}

export default Component;
