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
		"content": `<style>.f2v9u2zsh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.59 7.6l4.32 8.05l.59 1.1h-11l.59-1.1l4.32-8.05l.59-1.1zM12 10.25v2.5");
}

.jgyfg-bpu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 14.75h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ywno-sh7h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}
</style><g class="ux2u0rbkq"><path class="ywno-sh7h"/><path class="f2v9u2zsh"/><path class="jgyfg-bpu"/></g>`,
		"fallback": "iconoven:content-warning-sharp",
	});
}

export default Component;
