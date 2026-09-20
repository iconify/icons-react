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

.ntoashl4i {
  fill: var(--svg-color--ff6c15, #ff6c15);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.vj8e-k_ed {
  fill: var(--svg-color--fff, #fff);
  d: path("M13.533 4.002a.15.15 0 0 0-.173.12l-.987 5.722h-.746l-.987-5.722a.15.15 0 0 0-.173-.12c-3.534.692-6.24 3.753-6.454 7.479c0 0-.013.16-.013.24V12c0 3.952 2.787 7.253 6.467 7.985a.15.15 0 0 0 .173-.12l.987-5.722h.746l.987 5.735a.15.15 0 0 0 .173.12c3.52-.705 6.227-3.753 6.454-7.479c0 0 .013-.16.013-.24V12c0-3.979-2.773-7.266-6.467-7.998");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="ntoashl4i"/><path class="vj8e-k_ed"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:hemi-background",
	});
}

export default Component;
