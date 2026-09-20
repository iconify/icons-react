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
		"content": `<style>.t5aetqbwa {
  fill: currentColor;
  d: path("M10.75 19h2.5v-4.5h1.5v-6h-5.5v6h1.5zm-2.625 2.213q-1.825-.788-3.187-2.15t-2.15-3.188T2 11.988t.788-3.875t2.15-3.175t3.187-2.15T12.013 2t3.875.788t3.175 2.15t2.15 3.175t.787 3.875t-.787 3.887t-2.15 3.188t-3.175 2.15t-3.875.787t-3.888-.787m4.95-13.638Q13.5 7.15 13.5 6.5t-.425-1.075T12 5t-1.075.425T10.5 6.5t.425 1.075T12 8t1.075-.425");
}
</style><path class="t5aetqbwa"/>`,
		"fallback": "material-symbols:attribution-sharp",
	});
}

export default Component;
