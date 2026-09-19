import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vndntrcrv {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M0 23h64v4H0zm0 14h64v4H0z");
}

.y7ysveare {
  fill: var(--svg-color--75aadb, #75aadb);
  d: path("M54 10H10C3.373 10 0 14.925 0 21v2h64v-2c0-6.075-3.373-11-10-11M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11v-2H0z");
}

.yj05tmxxx {
  fill: var(--svg-color--25333a, #25333a);
  d: path("M0 25h64v14H0z");
}
</style><path class="yj05tmxxx"/><path class="vndntrcrv"/><path class="y7ysveare"/>`,
		"fallback": "emojione-v1:flag-for-botswana",
	});
}

export default Component;
