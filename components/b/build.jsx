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
		"content": `<style>.mu04t9b8q {
  fill: currentColor;
  d: path("m17.804 20.508l-6.55-6.562q-.558.258-1.138.406t-1.231.148q-2.289 0-3.894-1.606Q3.385 11.29 3.385 9q0-.65.144-1.251t.421-1.153l3.535 3.496L9.977 7.6L6.519 4.104q.552-.277 1.134-.44q.582-.164 1.232-.164q2.288 0 3.894 1.606T14.385 9q0 .69-.139 1.27q-.138.58-.415 1.1l6.561 6.55q.224.222.224.551t-.224.552l-1.523 1.523q-.223.223-.532.204t-.533-.242");
}
</style><path class="mu04t9b8q"/>`,
		"fallback": "material-symbols-light:build",
	});
}

export default Component;
