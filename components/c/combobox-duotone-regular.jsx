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
		"content": `<style>.fx8yhjh_u {
  d: path("M4 15h15");
}

.myzclp8ci {
  d: path("M3 5a2 2 0 0 1 2 -2h15a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.n4m8vbali {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h15a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
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

.r_r678bum {
  d: path("M6 7h6");
}

.wfw5phgmx {
  d: path("m15 6 2 2 2 -2");
}

.zceg_0atr {
  d: path("M4 20h15");
}
</style><g class="nrj6p8qat"><path class="n4m8vbali"/><path class="myzclp8ci"/><path class="r_r678bum"/><path class="wfw5phgmx"/><path class="fx8yhjh_u"/><path class="zceg_0atr"/></g>`,
		"fallback": "iconmind:combobox-duotone-regular",
	});
}

export default Component;
