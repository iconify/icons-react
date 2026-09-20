import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.btjyjgnlx {
  cx: 64px;
  cy: 64.51px;
  r: 14.03px;
}

.dz-kf-l3n {
  fill: var(--svg-color--f79329, #f79329);
}

.zrzdhyqpt {
  d: path("m104.74 64l16.25-27.32c.86-1.45.88-3.25.05-4.71a4.68 4.68 0 0 0-4.08-2.37H84.27L68.03 2.3C67.19.87 65.66 0 64 0s-3.19.87-4.03 2.3L43.73 29.6H11.05c-1.69 0-3.24.9-4.08 2.37c-.83 1.47-.82 3.27.05 4.71L23.26 64L7.01 91.32a4.687 4.687 0 0 0 4.03 7.09h32.69l16.24 27.3c.84 1.42 2.38 2.29 4.03 2.29s3.18-.87 4.03-2.29l16.24-27.3h32.69c1.69 0 3.24-.91 4.08-2.37c.83-1.47.82-3.27-.05-4.72zm3.96-25.02l-9.42 15.84l-9.43-15.84zM93.82 64L78.93 89.03H49.06L34.18 64l14.89-25.02h29.87zM64 13.87l9.35 15.72h-18.7zM19.29 38.98h18.85l-9.42 15.84zm0 50.05l9.43-15.85l9.42 15.85zM64 114.13l-9.36-15.72h18.71zm25.85-25.1l9.43-15.85l9.42 15.85z");
}
</style><g class="dz-kf-l3n"><path class="zrzdhyqpt"/><circle class="btjyjgnlx"/></g>`,
		"fallback": "noto-v1:dotted-six-pointed-star",
	});
}

export default Component;
