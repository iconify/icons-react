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
		"content": `<style>.a7ze7lbvx {
  fill: currentColor;
  d: path("M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M38 86h84v84H38Zm96-12V54h36v20Zm-12 0H86V54h36Zm0 108v20H86v-20Zm12 0h36v20h-36Zm0-12V86h84v84Zm84-114v18h-36V54h34a2 2 0 0 1 2 2M40 54h34v20H38V56a2 2 0 0 1 2-2m-2 146v-18h36v20H40a2 2 0 0 1-2-2m178 2h-34v-20h36v18a2 2 0 0 1-2 2");
}
</style><path class="a7ze7lbvx"/>`,
		"fallback": "ph:film-strip-light",
	});
}

export default Component;
