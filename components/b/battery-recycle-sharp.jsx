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
		"content": `<style>.sph6zac0d {
  d: path("M9 7.75h6v10H9zm2-2.5h2");
}

.t50rwul0w {
  d: path("M12.6 10.25L11 13h2l-1.6 2.5");
}

.wdd_k9f2l {
  d: path("M16.5 4.21a9 9 0 1 1-9 0m-.65 2.42l.65-2.42l-2.42-.65");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="wdd_k9f2l"/><path class="sph6zac0d"/><path class="t50rwul0w"/></g>`,
		"fallback": "iconoven:battery-recycle-sharp",
	});
}

export default Component;
