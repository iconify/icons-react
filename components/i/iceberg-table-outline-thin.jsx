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
		"content": `<style>.dt7zp_wra {
  d: path("M12 4.5 14.5 7h-5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s3pa5qb5b {
  d: path("M7 13h10l-5 5Z");
}

.x50q_4bdr {
  d: path("M3 10h18");
}
</style><g class="hntgybcog"><path class="dt7zp_wra"/><path class="x50q_4bdr"/><path class="s3pa5qb5b"/></g>`,
		"fallback": "iconmind:iceberg-table-outline-thin",
	});
}

export default Component;
