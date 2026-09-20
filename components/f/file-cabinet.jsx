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
		"content": `<style>.cirkwhb0k {
  fill: var(--svg-color--42c0e7, #42c0e7);
  d: path("M30.66 12.94h69.58v47.34H30.66z");
}

.d-iuxoztm {
  fill: var(--svg-color--f9b719, #f9b719);
  d: path("M72.29 81.32v8.05H58.61v-8.05h-2.54v10.45h18.76V81.32z");
}

.disqgs9hw {
  fill: var(--svg-color--066da3, #066da3);
  d: path("M55.13 45.66c-1.1 0-2 .83-2 1.85s.9 1.85 2 1.85h20.64c1.1 0 2-.83 2-1.85s-.9-1.85-2-1.85z");
}

.flv7bqp2v {
  fill: var(--svg-color--42c0e7, #42c0e7);
  d: path("M30.66 65.24h69.58v49.65H30.66z");
}

.nirvvrgka {
  fill: var(--svg-color--fff2d3, #fff2d3);
  d: path("M56.07 81.32h18.76v10.46H56.07z");
}

.p5k91bcki {
  fill: var(--svg-color--86d4ee, #86d4ee);
  d: path("M30.66 12.94h69.58v4.14H30.66z");
}

.rolxxq8sj {
  fill: var(--svg-color--86d4ee, #86d4ee);
  d: path("M30.66 65.24h69.58v4.14H30.66z");
}

.w54-hsbgu {
  fill: var(--svg-color--066da3, #066da3);
  d: path("M104.66 117c0 1.65-1.35 3-3 3H29.23c-1.65 0-3-1.35-3-3V11c0-1.65 1.35-3 3-3h72.43c1.65 0 3 1.35 3 3z");
}

.w9kl-2b0k {
  fill: var(--svg-color--fff2d3, #fff2d3);
  d: path("M56.07 27.87h18.76v10.46H56.07z");
}

.yk1hbgbku {
  fill: var(--svg-color--066da3, #066da3);
  d: path("M55.13 99.1c-1.1 0-2 .83-2 1.85s.9 1.85 2 1.85h20.64c1.1 0 2-.83 2-1.85s-.9-1.85-2-1.85z");
}

.yvjro_buk {
  fill: var(--svg-color--f9b719, #f9b719);
  d: path("M72.29 27.87v8.05H58.61v-8.05h-2.54v10.45h18.76V27.87z");
}
</style><path class="w54-hsbgu"/><path class="cirkwhb0k"/><path class="p5k91bcki"/><path class="flv7bqp2v"/><path class="rolxxq8sj"/><path class="yk1hbgbku"/><path class="nirvvrgka"/><path class="d-iuxoztm"/><path class="disqgs9hw"/><path class="w9kl-2b0k"/><path class="yvjro_buk"/>`,
		"fallback": "noto-v1:file-cabinet",
	});
}

export default Component;
