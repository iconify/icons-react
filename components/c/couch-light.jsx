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
		"content": `<style>.um7uzzb7c {
  fill: currentColor;
  d: path("M238 107.37V72a14 14 0 0 0-14-14H32a14 14 0 0 0-14 14v35.37A14 14 0 0 0 10 120v48a14 14 0 0 0 14 14h10v18a6 6 0 0 0 12 0v-18h164v18a6 6 0 0 0 12 0v-18h10a14 14 0 0 0 14-14v-48a14 14 0 0 0-8-12.63M226 72v34h-10a14 14 0 0 0-14 14v18h-68V70h90a2 2 0 0 1 2 2M32 70h90v68H54v-18a14 14 0 0 0-14-14H30V72a2 2 0 0 1 2-2m202 98a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v24a6 6 0 0 0 6 6h160a6 6 0 0 0 6-6v-24a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z");
}
</style><path class="um7uzzb7c"/>`,
		"fallback": "ph:couch-light",
	});
}

export default Component;
