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
		"content": `<style>.b1b76wbwu {
  fill: var(--svg-color--fff, #fff);
  d: path("M27.552 21.234c0 5.38-2.907 9.732-6.498 9.732c-3.59 0-6.501-4.353-6.501-9.732c0-5.376 2.911-9.733 6.501-9.733s6.498 4.357 6.498 9.733m21.993 0c0 5.38-2.907 9.732-6.498 9.732c-3.59 0-6.501-4.353-6.501-9.732c0-5.376 2.911-9.733 6.501-9.733s6.498 4.357 6.498 9.733");
}

.calsv82-z {
  fill: var(--svg-color--fbbf67, #fbbf67);
  d: path("M63.957 32.021C63.957 49.683 49.643 64 31.978 64S0 49.684 0 32.021S14.314.041 31.979.041s31.978 14.318 31.978 31.98");
}

.e2is7bb5w {
  cx: 43.05px;
  cy: 21.234px;
  rx: 4.206px;
  ry: 5.099px;
}

.mrjy-p0fq {
  fill: var(--svg-color--25333a, #25333a);
}

.s8i5kulen {
  cx: 32.733px;
  cy: 46.908px;
  fill: var(--svg-color--633d19, #633d19);
  rx: 10.172px;
  ry: 10.09px;
}

.t5szmqbtm {
  cx: 21.05px;
  cy: 21.234px;
  rx: 4.206px;
  ry: 5.099px;
}
</style><path class="calsv82-z"/><path class="b1b76wbwu"/><g class="mrjy-p0fq"><ellipse class="t5szmqbtm"/><ellipse class="e2is7bb5w"/></g><ellipse class="s8i5kulen"/>`,
		"fallback": "emojione-v1:face-with-open-mouth",
	});
}

export default Component;
