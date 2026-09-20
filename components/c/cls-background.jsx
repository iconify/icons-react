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

.pv4inic5e {
  fill: var(--svg-color--0053f1, #0053f1);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.xeyd60bam {
  fill: var(--svg-color--fff, #fff);
  d: path("M12.002 20a8 8 0 1 0-7.181-4.47l5.93-3.535l-2.472-1.411a.725.725 0 0 1-.268-.98a.725.725 0 0 1 .98-.268l2.54 1.426V7.911c0-.391.282-.617.673-.617c.39 0 .739.226.739.617v2.851l2.475-1.426a.725.725 0 0 1 .979.269a.727.727 0 0 1-.263.979l-2.49 1.411l2.475 1.412a.717.717 0 0 1 .264.974a.73.73 0 0 1-.739.353a.6.6 0 0 1-.226-.085l-2.475-1.425v2.865c0 .391-.348.617-.739.617c-.39 0-.673-.226-.673-.617v-2.88l-5.976 3.53A7.99 7.99 0 0 0 12.002 20");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="pv4inic5e"/><path class="xeyd60bam"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:cls-background",
	});
}

export default Component;
