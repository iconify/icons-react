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
		"content": `<style>.fc22uxsbx {
  fill: var(--svg-color--fff, #fff);
  d: path("m11.773 10.378l.245.955l.209-.955l5.258-3.933H20l-.684 3.47l-2.427 1.854v.453h.596l.457 2.09l-2.515 3.244H15.2l-1.6-2.311l-.916 1.422h-.226l-.231-.445h-.45l-.23.445h-.227l-.915-1.422l-1.6 2.31h-.227l-2.516-3.244l.458-2.089h.591v-.453L4.684 9.916L4 6.445h2.516z");
}

.ft5dv1b6b {
  fill: none;
}

.mumfproca {
  fill: var(--svg-color--000, #000);
  d: path("M24 0H0v24h24z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="mumfproca"/><path class="fc22uxsbx"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:btrfly-background",
	});
}

export default Component;
