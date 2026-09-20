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

.i4kbb-7zf {
  stop-color: var(--svg-color--00edef, #00edef);
}

.jomso-bmy {
  fill: var(--svg-color--fff, #fff);
  d: path("M12.633 4h-8.1v3.2h6.965c1.346.036 4.236 1.603 4.236 4.597c0 3.59-2.759 5.003-4.236 5.003H7.734V20h4.899c2.295 0 6.938-2.288 6.832-8.203C19.36 5.884 14.795 4 12.633 4m-3.3 6.4h1.6a1.6 1.6 0 1 1 0 3.2h-1.6zm-4.8 1.6a1.6 1.6 0 0 1 1.6-1.6v3.2a1.6 1.6 0 0 1-1.6-1.6");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.r4i437pya {
  d: path("M24 0H0v24h24z");
}

.w6k954b6m {
  stop-color: var(--svg-color--0094ff, #0094ff);
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path fill="url(#SVGh4LRAeDW)" class="r4i437pya"/><path class="jomso-bmy"/></g><defs><linearGradient id="SVGh4LRAeDW" x1="7.779" x2="17.434" y1="6.011" y2="17.075" gradientUnits="userSpaceOnUse"><stop class="i4kbb-7zf"/><stop offset="1" class="w6k954b6m"/></linearGradient><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:dad-background",
	});
}

export default Component;
