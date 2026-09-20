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
		"content": `<style>.bhznvebhc {
  fill: currentColor;
  d: path("m11.98 11.248l.907.906l5.829-5.829l-.906-.906zM5.136 19h.906l6.113-6.113l-.906-.906l-6.113 6.113zm8.105-5.76l-2.326-2.346l4.79-4.79l-.821-.821l-5.34 5.34l-.708-.67l6.067-6.066l1.51 1.51l1.398-1.399l2.346 2.346zM6.463 20H4.135v-2.327l6.76-6.779l2.346 2.347z");
}
</style><path class="bhznvebhc"/>`,
		"fallback": "material-symbols-light:ink-pen-outline-sharp",
	});
}

export default Component;
