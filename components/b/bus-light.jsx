import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m78dxjagk {
  fill: currentColor;
  d: path("M184 34H72a30 30 0 0 0-30 30v144a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-18h68v18a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14V64a30 30 0 0 0-30-30M54 178v-60h148v60Zm0-100h148v28H54Zm18-32h112a18 18 0 0 1 18 18v2H54v-2a18 18 0 0 1 18-18m10 162a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-18h28Zm118 2h-24a2 2 0 0 1-2-2v-18h28v18a2 2 0 0 1-2 2m-98-62a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72 0a10 10 0 1 1-10-10a10 10 0 0 1 10 10m72-68v24a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0M22 80v24a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0");
}
</style><path class="m78dxjagk"/>`,
		"fallback": "ph:bus-light",
	});
}

export default Component;
