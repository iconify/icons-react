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
		"content": `<style>.a9xckwbov {
  d: path("m9 10 2 2 -2 2");
}

.asoso3n9i {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 12h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.b4x_isbqv {
  d: path("M8 6H5v12h3");
}

.br_h3vzli {
  d: path("m15 10 -2 2 2 2");
}

.d_6ujebpi {
  d: path("M16 6h3v12h-3");
}

.eegqg8bki {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m15 10 -2 2 2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fvteuwbda {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M13 12h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gzjf714fp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 6h3v12h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pr37be5vj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 6H5v12h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qhy91zm_e {
  d: path("M6 12h5");
}

.qlfruhq7c {
  d: path("M13 12h5");
}

.qxfpuob8x {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 10 2 2 -2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="pr37be5vj"/><path class="gzjf714fp"/><path class="asoso3n9i"/><path class="qxfpuob8x"/><path class="fvteuwbda"/><path class="eegqg8bki"/><path class="b4x_isbqv"/><path class="d_6ujebpi"/><path class="qhy91zm_e"/><path class="a9xckwbov"/><path class="qlfruhq7c"/><path class="br_h3vzli"/></g>`,
		"fallback": "iconmind:context-compress-duotone-regular",
	});
}

export default Component;
