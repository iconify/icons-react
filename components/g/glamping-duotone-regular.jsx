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
		"content": `<style>.hc7fbd-jo {
  d: path("M4 19h16");
}

.i6clenrss {
  d: path("M2 16 12 6l10 10Z");
}

.mv4n16bha {
  fill: currentColor;
  d: path("m12 10.5 2 2 -2 2 -2 -2Z");
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

.vra1stbnu {
  fill: currentColor;
  d: path("M2 16 12 6l10 10Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ydhsvyjzg {
  d: path("m12 10.5 2 2 -2 2 -2 -2Z");
}
</style><g class="nrj6p8qat"><path class="vra1stbnu"/><path class="mv4n16bha"/><path class="i6clenrss"/><path class="ydhsvyjzg"/><path class="hc7fbd-jo"/></g>`,
		"fallback": "iconmind:glamping-duotone-regular",
	});
}

export default Component;
