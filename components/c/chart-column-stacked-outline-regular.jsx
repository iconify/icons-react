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
		"content": `<style>.e71sokbbi {
  d: path("M9 12v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.pt73j1ikv {
  d: path("M15 14v6");
}

.r3faxubne {
  d: path("M4 4v16");
}

.sb7rl7wyu {
  d: path("M9 6v3");
}

.yo-0d--rc {
  d: path("M15 8v3");
}
</style><g class="nrj6p8qat"><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="e71sokbbi"/><path class="sb7rl7wyu"/><path class="pt73j1ikv"/><path class="yo-0d--rc"/></g>`,
		"fallback": "iconmind:chart-column-stacked-outline-regular",
	});
}

export default Component;
