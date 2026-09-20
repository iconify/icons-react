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
		"content": `<style>.zon3qotjl {
  fill: currentColor;
  d: path("M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 112h-10a34 34 0 0 1 0-68h10ZM30 94h10a34 34 0 0 1 0 68H30Zm0 98v-18h10a46 46 0 0 0 0-92H30V64a2 2 0 0 1 2-2h90v132H32a2 2 0 0 1-2-2m194 2h-90V62h90a2 2 0 0 1 2 2v18h-10a46 46 0 0 0 0 92h10v18a2 2 0 0 1-2 2");
}
</style><path class="zon3qotjl"/>`,
		"fallback": "ph:court-basketball-light",
	});
}

export default Component;
