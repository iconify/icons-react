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
		"content": `<style>.adh00bbpd {
  stop-color: var(--svg-color--48d4ff, #48d4ff);
}

.b2ihjsbgm {
  d: path("M3 19.03L9.349 7.378l5.604-2.432l-6.358 11.641z");
}

.ft5dv1b6b {
  fill: none;
}

.iftzw2m_v {
  d: path("M17.434 10.45L21 11.739l-1.785 3.225l-4.325.146z");
}

.j0mjvbbqj {
  stop-color: var(--svg-color--4086ff, #4086ff);
}

.jqej4wbfh {
  d: path("m9.328 16.374l4.816-8.85l2.759 2.666l-4.768 8.864z");
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGk1wxbelQ)" class="b2ihjsbgm"/><path fill="url(#SVGu9rDbdDz)" class="jqej4wbfh"/><path fill="url(#SVGA0QqOdnR)" class="iftzw2m_v"/><defs><linearGradient id="SVGk1wxbelQ" x1="3" x2="21" y1="11.998" y2="11.998" gradientUnits="userSpaceOnUse"><stop class="j0mjvbbqj"/><stop offset="1" class="adh00bbpd"/></linearGradient><linearGradient id="SVGu9rDbdDz" x1="2.999" x2="20.999" y1="12" y2="12" gradientUnits="userSpaceOnUse"><stop class="j0mjvbbqj"/><stop offset="1" class="adh00bbpd"/></linearGradient><linearGradient id="SVGA0QqOdnR" x1="14.89" x2="21" y1="12.784" y2="12.784" gradientUnits="userSpaceOnUse"><stop class="j0mjvbbqj"/><stop offset="1" class="adh00bbpd"/></linearGradient></defs></g>`,
		"fallback": "token-branded:dao",
	});
}

export default Component;
