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
		"content": `<style>.dm5ccobgo {
  d: path("M12 12h4");
}

.kv86m5bsi {
  d: path("M3 4v5h5");
}

.mcj52c2nx {
  d: path("M12 3a9 9 0 1 1 -9 9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pfpu_3ppl {
  d: path("M12 8v4");
}
</style><g class="nrj6p8qat"><path class="kv86m5bsi"/><path class="pfpu_3ppl"/><path class="dm5ccobgo"/><path class="mcj52c2nx"/></g>`,
		"fallback": "iconmind:history-outline-regular",
	});
}

export default Component;
