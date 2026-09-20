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
		"content": `<style>.f_zc0nb2r {
  cx: 92px;
  cy: 64.28px;
  fill: var(--svg-color--fff, #fff);
  rx: 20.09px;
  ry: 16.13px;
}

.ryy6gyben {
  cx: 36px;
  cy: 64.28px;
  fill: var(--svg-color--fff, #fff);
  rx: 20.09px;
  ry: 16.13px;
}

.t70x9sbug {
  fill: var(--svg-color--2f2f2f, #2f2f2f);
  d: path("M91.98 47.59c-18.83 0-24.97 21.2-22.32 21.2c.77 0 1.39-1.27 2.34-3.07c.15 1.38.52 2.71 1.08 3.97c2.45 4.77 7.42 8.03 13.15 8.03c8.17 0 14.79-6.62 14.79-14.79c0-3.18-1.01-6.13-2.72-8.54c12.72 2.91 13.57 14.4 16 14.4c2.79 0-3.49-21.2-22.32-21.2m5.08 12.72c-.33 1.66-2.19 2.7-4.15 2.31c-1.97-.39-3.29-2.05-2.96-3.71s2.19-2.7 4.15-2.31s3.29 2.05 2.96 3.71");
}

.xvykcbcui {
  fill: var(--svg-color--2f2f2f, #2f2f2f);
  d: path("M35.98 47.59c-18.83 0-24.97 21.2-22.32 21.2c.77 0 1.39-1.27 2.34-3.07c.15 1.38.52 2.71 1.08 3.97c2.45 4.77 7.42 8.03 13.15 8.03c8.17 0 14.79-6.62 14.79-14.79c0-3.18-1.01-6.13-2.72-8.54c12.72 2.91 13.57 14.4 16 14.4c2.79 0-3.49-21.2-22.32-21.2m5.08 12.72c-.33 1.66-2.19 2.7-4.15 2.31c-1.97-.39-3.29-2.05-2.96-3.71s2.19-2.7 4.15-2.31s3.29 2.05 2.96 3.71");
}
</style><ellipse class="ryy6gyben"/><path class="xvykcbcui"/><ellipse class="f_zc0nb2r"/><path class="t70x9sbug"/>`,
		"fallback": "noto-v1:eyes",
	});
}

export default Component;
