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
		"content": `<style>.bcmmubc3b {
  fill: var(--svg-color--83bf4f, #83bf4f);
  d: path("M32 1L17 20.8s7.2 3.8 15 3.8s15-3.8 15-3.8z");
}

.pw05iy71w {
  fill: var(--svg-color--7cb545, #7cb545);
  d: path("M32 12.3L12 32.5s9.7 3.4 20 3.4s20-3.4 20-3.4z");
}

.q4buvli0c {
  fill: var(--svg-color--76aa3f, #76aa3f);
  d: path("M32 23.6L7 43.8s12.1 3.4 25 3.4s25-3.4 25-3.4z");
}

.sd3cq3bqv {
  fill: var(--svg-color--71a03a, #71a03a);
  d: path("M32 34.9L2 55.1s14.5 3.4 30 3.4s30-3.4 30-3.4z");
}

.tgwh8w-zq {
  fill: var(--svg-color--947151, #947151);
  d: path("M25 52.1h14V64H25z");
}
</style><path class="tgwh8w-zq"/><path class="sd3cq3bqv"/><path class="q4buvli0c"/><path class="pw05iy71w"/><path class="bcmmubc3b"/>`,
		"fallback": "emojione:evergreen-tree",
	});
}

export default Component;
