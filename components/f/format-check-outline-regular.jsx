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
		"content": `<style>.ae0h5kb0o {
  d: path("M9 15h6");
}

.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.dl7inkt3h {
  d: path("M10.5 12H15");
}

.jlfjgzbqx {
  d: path("M9 9h6");
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="jlfjgzbqx"/><path class="dl7inkt3h"/><path class="ae0h5kb0o"/></g>`,
		"fallback": "iconmind:format-check-outline-regular",
	});
}

export default Component;
