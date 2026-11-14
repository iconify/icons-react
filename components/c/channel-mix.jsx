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
		"content": `<style>.jnupj2bey {
  d: path("M9.75 14.25a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0Z");
}

.k0m8dqbzw {
  d: path("M2.75 14.25a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0Z");
}

.o6pnmotxa {
  d: path("M6.25 8.25a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o6pnmotxa"/><path class="k0m8dqbzw"/><path class="jnupj2bey"/></g>`,
		"fallback": "uix-sharp:channel-mix",
	});
}

export default Component;
