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
		"content": `<style>.jkuar_6al {
  fill: currentColor;
  d: path("m11.712 14l-5.945-.692q-.528-.056-.677-.56t.243-.852l9.783-8.78q.067-.068.155-.101q.088-.034.254-.034q.27 0 .426.233t.003.49l-3.723 6.315l5.983.692q.528.056.687.55t-.234.843l-9.783 8.8q-.067.067-.155.091t-.254.024q-.27 0-.407-.232t-.003-.471z");
}
</style><path class="jkuar_6al"/>`,
		"fallback": "material-symbols-light:electric-bolt-rounded",
	});
}

export default Component;
