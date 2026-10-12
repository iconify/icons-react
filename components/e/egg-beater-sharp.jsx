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
		"content": `<style>.snp_abrqw {
  d: path("M8.25 2.75h7.5v2.5h-7.5zM12 5.25v6.5m-3 0h6m-3-4h3.25");
}

.wpa9c-iwl {
  d: path("M9 11.75C6.5 13 6.5 20 9 21.25c2.5-1.25 2.5-8.25 0-9.5Zm6 0c-2.5 1.25-2.5 8.25 0 9.5c2.5-1.25 2.5-8.25 0-9.5Z");
}

.x02lk-0hf {
  cx: 17.25px;
  cy: 7.75px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="snp_abrqw"/><circle class="x02lk-0hf"/><path class="wpa9c-iwl"/></g>`,
		"fallback": "iconoven:egg-beater-sharp",
	});
}

export default Component;
