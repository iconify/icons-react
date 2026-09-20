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
		"content": `<style>.esplf8bcv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m8 17 4 4 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gl5tnbc1a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 14h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nz19jcivh {
  d: path("M2 10h4l3 -3 3 3 3 -3 3 3h4");
}

.ov7kkt0lo {
  d: path("m8 17 4 4 4 -4");
}

.t-6vihbqs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 10h4l3 -3 3 3 3 -3 3 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vxy4ztabh {
  d: path("M4 14h16");
}
</style><g class="hntgybcog"><path class="t-6vihbqs"/><path class="esplf8bcv"/><path class="gl5tnbc1a"/><path class="nz19jcivh"/><path class="ov7kkt0lo"/><path class="vxy4ztabh"/></g>`,
		"fallback": "iconmind:earthquake-duotone-thin",
	});
}

export default Component;
