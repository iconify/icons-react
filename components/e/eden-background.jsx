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

.iy1oo6llf {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("m16.16 9.893l-3.271-3.16v6.325zm-6.702 6.698l1.653-1.6v-.062l-3.52-3.4v3.262zm.969.938l.684-.662V20h1.778v-3.111l1.378 1.333v-.009l.266.258l3.231-3.124h.014V9.556h-.027L12.97 4.933L11.999 4L6.25 9.556h-.027v5.79h.014l2.253 2.183l.964.938h.01l.968-.934zm2.462-2.507l1.644 1.587l1.912-1.853v-3.263l-3.556 3.436zM7.84 9.893l3.271 3.165V6.733z");
}

.jggj2ub1v {
  stop-color: var(--svg-color--10cb88, #10cb88);
}

.oz9227rbr {
  stop-color: var(--svg-color--bdf418, #bdf418);
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.r4i437pya {
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path fill="url(#SVGmqvwuCam)" class="r4i437pya"/><path clip-rule="evenodd" class="iy1oo6llf"/></g><defs><linearGradient id="SVGmqvwuCam" x1="7.48" x2="16.498" y1="16.645" y2="9.462" gradientUnits="userSpaceOnUse"><stop class="jggj2ub1v"/><stop offset="1" class="oz9227rbr"/></linearGradient><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:eden-background",
	});
}

export default Component;
