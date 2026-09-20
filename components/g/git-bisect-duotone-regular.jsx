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
		"content": `<style>.a-xmscbvb {
  fill: currentColor;
  d: path("M4 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.a6m5kfb7k {
  d: path("M18 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.bo1pphbod {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 14h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e7q8l6x6g {
  d: path("M6 14h5");
}

.eylqpv51p {
  d: path("M11 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.iup9trbmr {
  d: path("M12 6v4");
}

.ky48x0b1z {
  fill: currentColor;
  d: path("M18 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n74qqnw0j {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 6v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nlx-15cix {
  d: path("M4 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.osdsz4bam {
  d: path("M13 14h5");
}

.x7kl1kqgv {
  fill: currentColor;
  d: path("M11 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xh1hdmb8d {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 14h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="a-xmscbvb"/><path class="x7kl1kqgv"/><path class="ky48x0b1z"/><path class="bo1pphbod"/><path class="xh1hdmb8d"/><path class="n74qqnw0j"/><path class="nlx-15cix"/><path class="eylqpv51p"/><path class="a6m5kfb7k"/><path class="e7q8l6x6g"/><path class="osdsz4bam"/><path class="iup9trbmr"/></g>`,
		"fallback": "iconmind:git-bisect-duotone-regular",
	});
}

export default Component;
