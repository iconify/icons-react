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
		"content": `<style>.ae0h5kb0o {
  d: path("M9 15h6");
}

.b2n5wjbvh {
  d: path("M9 12v9");
}

.ccfz103ff {
  d: path("M2 12 12 2l10 10Z");
}

.h7dovcc6h {
  fill: currentColor;
  d: path("M2 12 12 2l10 10Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o1dsref5n {
  d: path("M15 12v9");
}

.x3sflacnk {
  d: path("M9 18h6");
}
</style><g class="nrj6p8qat"><path class="h7dovcc6h"/><path class="ccfz103ff"/><path class="b2n5wjbvh"/><path class="o1dsref5n"/><path class="ae0h5kb0o"/><path class="x3sflacnk"/></g>`,
		"fallback": "iconmind:attic-duotone-regular",
	});
}

export default Component;
