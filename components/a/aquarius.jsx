import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.torvvrzat {
  fill: var(--svg-color--fff, #fff);
  stroke: var(--svg-color--fff, #fff);
  stroke-miterlimit: 10;
  d: path("M48.8 18.2c-3.2 2.4-6.3 4.8-9.5 7.2v-5.9c0-1.1-1.3-2-2.2-1.3c-3.2 2.4-6.3 4.8-9.5 7.2v-5.9c0-1.1-1.3-2-2.2-1.3c-3.9 2.9-7.8 5.9-11.7 8.8c-1.5 1.1-.1 3.8 1.5 2.6c3.2-2.4 6.3-4.8 9.5-7.2v5.9c0 1.1 1.3 2 2.2 1.3c3.2-2.4 6.3-4.8 9.5-7.2v5.9c0 1.1 1.3 2 2.2 1.3c3.2-2.4 6.3-4.8 9.5-7.2v5.9c0 2 2.9 2 2.9 0v-8.8c0-1-1.3-2-2.2-1.3zm0 16c-3.2 2.4-6.3 4.8-9.5 7.2v-5.9c0-1.1-1.3-2-2.2-1.3c-3.2 2.4-6.3 4.8-9.5 7.2v-5.9c0-1.1-1.3-2-2.2-1.3c-3.9 2.9-7.8 5.9-11.7 8.8c-1.5 1.1-.1 3.8 1.5 2.6c3.2-2.4 6.3-4.8 9.5-7.2v5.9c0 1.1 1.3 2 2.2 1.3c3.2-2.4 6.3-4.8 9.5-7.2v5.9c0 1.1 1.3 2 2.2 1.3c3.2-2.4 6.3-4.8 9.5-7.2v5.9c0 2 2.9 2 2.9 0v-8.8c0-1-1.3-2-2.2-1.3z");
}

.z535ym25t {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--785aa0, #785aa0);
}
</style><circle class="z535ym25t"/><path class="torvvrzat"/>`,
		"fallback": "emojione:aquarius",
	});
}

export default Component;
