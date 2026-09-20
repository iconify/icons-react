import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bd9gczbnq {
  cx: 13px;
  cy: 13px;
  r: 13px;
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.ivjvz2eii {
  fill: var(--svg-color--000, #000);
}

.j2u484b1i {
  fill-rule: evenodd;
  d: path("M9 12.5H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1m-1 2v-1h1v1z");
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.tz3tlp21j {
  d: path("M5.5 9.5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 5 11v-1a.5.5 0 0 1 .5-.5");
}

.uo87b4bey {
  fill-rule: evenodd;
  d: path("M19 6.5H7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3m-13 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGGC0X6dlB"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="uo87b4bey"/><path class="tz3tlp21j"/><path clip-rule="evenodd" class="j2u484b1i"/></g></mask></defs><circle mask="url(#SVGGC0X6dlB)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:credit-card-circle-filled",
	});
}

export default Component;
