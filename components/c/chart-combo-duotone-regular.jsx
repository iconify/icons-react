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
		"content": `<style>.dd2oi04rr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dtz958b6w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m4 9 4 -4 4 4 4 -4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ejtyvbbdg {
  d: path("M17 15v4");
}

.f-06aqtvg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 15v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pbz4y6llk {
  d: path("M5 13v6");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.t4vjq-bqk {
  d: path("m4 9 4 -4 4 4 4 -4 4 4");
}

.v42r65zzh {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M11 12v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wk0v94gpu {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 13v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xqz890wro {
  d: path("M11 12v7");
}
</style><g class="nrj6p8qat"><path class="wk0v94gpu"/><path class="v42r65zzh"/><path class="f-06aqtvg"/><path class="dd2oi04rr"/><path class="dtz958b6w"/><path class="pbz4y6llk"/><path class="xqz890wro"/><path class="ejtyvbbdg"/><path class="rkhcgsbdl"/><path class="t4vjq-bqk"/></g>`,
		"fallback": "iconmind:chart-combo-duotone-regular",
	});
}

export default Component;
