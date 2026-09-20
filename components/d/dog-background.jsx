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

.h2yyptboy {
  fill: var(--svg-color--c3a634, #c3a634);
  d: path("M24 0H0v24h24z");
}

.lrbmg6bdu {
  fill: var(--svg-color--fff, #fff);
  d: path("M6.75 20v-7h-2v-2h2V4h5.496c4.798 0 7.164 3.537 6.996 8.038C19.076 16.495 17.184 20 12.247 20zM8.747 6v5h3.998v2H8.748v5h3.498c3.838 0 4.872-2.64 4.998-6.037C17.371 8.576 15.912 6 12.246 6z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="h2yyptboy"/><path class="lrbmg6bdu"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:dog-background",
	});
}

export default Component;
