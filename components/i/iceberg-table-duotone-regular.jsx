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
		"content": `<style>.dj0lbhr2u {
  fill: currentColor;
  d: path("M7 13h10l-5 5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.dt7zp_wra {
  d: path("M12 4.5 14.5 7h-5Z");
}

.jal3bn45q {
  fill: currentColor;
  d: path("M12 4.5 14.5 7h-5Z");
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

.s3pa5qb5b {
  d: path("M7 13h10l-5 5Z");
}

.x50q_4bdr {
  d: path("M3 10h18");
}
</style><g class="nrj6p8qat"><path class="jal3bn45q"/><path class="dj0lbhr2u"/><path class="dt7zp_wra"/><path class="x50q_4bdr"/><path class="s3pa5qb5b"/></g>`,
		"fallback": "iconmind:iceberg-table-duotone-regular",
	});
}

export default Component;
