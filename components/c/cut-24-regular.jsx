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
		"content": `<style>.tuj4vli4j {
  fill: currentColor;
  d: path("M12.14 9.342L7.37 2.329a.75.75 0 1 0-1.24.844l5.13 7.545l-2.395 3.743a4 4 0 1 0 1.178.943l2.135-3.337l2.065 3.036a4 4 0 1 0 1.261-.813l-2.447-3.597l.002-.002zM4.5 18a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m10 0a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m-.562-8.684l3.943-6.162a.75.75 0 1 0-1.263-.808L13.02 7.968z");
}
</style><path class="tuj4vli4j"/>`,
		"fallback": "fluent:cut-24-regular",
	});
}

export default Component;
