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

.pp2gcccng {
  fill: var(--svg-color--fff, #fff);
  d: path("M12 20a8 8 0 1 0-7.75-10h1.566A6.5 6.5 0 0 1 18 9.5h-1.67a5 5 0 0 0-8.915.5H12.5v1.5H7.026A5 5 0 0 0 7.1 13h11.325A6.5 6.5 0 0 1 6 14.5H4.4A8 8 0 0 0 12 20m-7.94-7h1.516a6.6 6.6 0 0 1-.055-1.5h-1.5a8 8 0 0 0 .04 1.5M12 17a5 5 0 0 0 4.33-2.5H7.67A5 5 0 0 0 12 17");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.y4qstt8qb {
  fill: var(--svg-color--ff5d01, #ff5d01);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="y4qstt8qb"/><path class="pp2gcccng"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:ego-background",
	});
}

export default Component;
