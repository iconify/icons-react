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

.ehbqml5ic {
  cx: 10px;
  cy: 10px;
  r: 2px;
}

.ft5dv1b6b {
  fill: none;
}

.ivjvz2eii {
  fill: var(--svg-color--000, #000);
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.lwivuzb_u {
  cx: 10px;
  cy: 15px;
  r: 2px;
}

.m_cyn06nd {
  cx: 10px;
  cy: 5px;
  r: 2px;
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGSSMeTbsK"><path class="k5-vjlrin"/><g transform="translate(3 3)" class="ivjvz2eii"><circle class="lwivuzb_u"/><circle class="ehbqml5ic"/><circle class="m_cyn06nd"/></g></mask></defs><circle mask="url(#SVGSSMeTbsK)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:dots-y-circle-filled",
	});
}

export default Component;
