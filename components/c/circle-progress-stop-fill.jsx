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
		"content": `<style>.gmk6nkbpc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8 11C8 9.343146 9.343146 8 11 8L13 8C14.656854 8 16 9.343146 16 11L16 13C16 14.656854 14.656854 16 13 16L11 16C9.343146 16 8 14.656854 8 13Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u9_ce1bvt {
  d: path("M12 22C6.47715 22 2 17.5229 2 12C2 6.47715 6.47715 2 12 2M17.8778 3.90983C18.7268 4.52663 19.4734 5.2732 20.0902 6.12215M21.8769 10.4357C22.041 11.4721 22.041 12.5279 21.8769 13.5643M20.0902 17.8778C19.4734 18.7268 18.7268 19.4734 17.8778 20.0902");
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="gmk6nkbpc"/><path class="u9_ce1bvt"/></g>`,
		"fallback": "keyline-icons:circle-progress-stop-fill",
	});
}

export default Component;
