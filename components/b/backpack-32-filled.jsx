import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bjg0_qs0s {
  fill: currentColor;
  d: path("M12 16a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm4-14a4 4 0 0 0-4 4v.832A10 10 0 0 0 6 16v4h20v-4c0-4.1-2.468-7.625-6-9.168V6a4 4 0 0 0-4-4m0 4q-1.03.002-2 .2V6a2 2 0 1 1 4 0v.2q-.97-.198-2-.2m-2 6h4a4 4 0 0 1 4 4a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2a4 4 0 0 1 4-4m-2 13v-3H6v3a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-3H14v3a1 1 0 1 1-2 0");
}
</style><path class="bjg0_qs0s"/>`,
		"fallback": "fluent:backpack-32-filled",
	});
}

export default Component;
