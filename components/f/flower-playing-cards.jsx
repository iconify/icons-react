import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.diqg4cbnl {
  cx: 15.276px;
  cy: 12.495px;
  r: 7.578px;
  fill: var(--svg-color--fff, #fff);
}

.qnnweabny {
  d: path("M8 36h20a4 4 0 0 0 4-4v-4c-4.117-2.744-21.139-8.233-28 0v4a4 4 0 0 0 4 4");
}

.vayb2_u8x {
  fill: var(--svg-color--dd2e44, #dd2e44);
  d: path("M32 28H4V4a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4z");
}
</style><path class="vayb2_u8x"/><path class="qnnweabny"/><circle class="diqg4cbnl"/>`,
		"fallback": "twemoji:flower-playing-cards",
	});
}

export default Component;
