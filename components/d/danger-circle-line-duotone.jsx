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
		"content": `<style>.c5yb8bdcb {
  d: path("M12 7V13");
}

.doy9q4b5f {
  cx: 12px;
  cy: 12px;
  r: 10px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pr1jznbmm {
  stroke-linejoin: round;
  d: path("M12 16H12.0001");
}
</style><g class="ipq1z-bjh"><circle class="doy9q4b5f"/><path class="c5yb8bdcb"/><path class="pr1jznbmm"/></g>`,
		"fallback": "solar:danger-circle-line-duotone",
	});
}

export default Component;
