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
		"content": `<style>.ej2aikqgh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M23 12C23 18.0751 18.0751 23 12 23C5.9249 23 1 18.0751 1 12C1 5.9249 5.9249 1 12 1C18.0751 1 23 5.9249 23 12ZM17 12C17 14.7614 14.7614 17 12 17C9.2386 17 7 14.7614 7 12C7 9.2386 9.2386 7 12 7C14.7614 7 17 9.2386 17 12Z");
}
</style><path clip-rule="evenodd" class="ej2aikqgh"/>`,
		"fallback": "keyline-icons:circle-record-fill",
	});
}

export default Component;
