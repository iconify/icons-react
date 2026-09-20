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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.ihxun8b5f {
  fill: var(--svg-color--17e6a1, #17e6a1);
  d: path("M16.95 7.05H12V12h4.95z");
}

.r7dgjpwoc {
  fill: var(--svg-color--2354e6, #2354e6);
  d: path("M12 16.95a4.95 4.95 0 1 1 0-9.9V3a9 9 0 1 0 9 9h-4.05A4.95 4.95 0 0 1 12 16.95");
}
</style><g class="ft5dv1b6b"><path class="r7dgjpwoc"/><path class="ihxun8b5f"/></g>`,
		"fallback": "token-branded:gate-io",
	});
}

export default Component;
