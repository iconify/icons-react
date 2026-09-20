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
		"content": `<style>.em798y7rn {
  d: path("M6 12h14");
}

.gmcwnnbyg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m17 9 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.is4gb6hvz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}

.ndk47rb8x {
  d: path("M8 3c6 3 6 15 0 18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pwnjwxbqo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 3c6 3 6 15 0 18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wuvisubmw {
  d: path("M8 3v18");
}

.xl0-albli {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 12h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="pwnjwxbqo"/><path class="is4gb6hvz"/><path class="xl0-albli"/><path class="gmcwnnbyg"/><path class="ndk47rb8x"/><path class="wuvisubmw"/><path class="em798y7rn"/><path class="mi_m6achy"/></g>`,
		"fallback": "iconmind:archery-duotone-regular",
	});
}

export default Component;
