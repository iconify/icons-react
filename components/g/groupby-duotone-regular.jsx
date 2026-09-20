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
		"content": `<style>.axa755czi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.eu9kkgbdm {
  d: path("M9 12h12");
}

.fco1n9k6o {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 17h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ngf5sgn5h {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 4H3v16h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r4nj1cczx {
  d: path("M6 4H3v16h3");
}

.sxy07wbdf {
  d: path("M9 7h12");
}

.uq6n7rbdt {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 7h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x3jqftbaj {
  d: path("M9 17h12");
}
</style><g class="nrj6p8qat"><path class="ngf5sgn5h"/><path class="uq6n7rbdt"/><path class="axa755czi"/><path class="fco1n9k6o"/><path class="r4nj1cczx"/><path class="sxy07wbdf"/><path class="eu9kkgbdm"/><path class="x3jqftbaj"/></g>`,
		"fallback": "iconmind:groupby-duotone-regular",
	});
}

export default Component;
