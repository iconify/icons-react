import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.issdh_8pd {
  fill: currentColor;
  d: path("M6.615 12.014A.5.5 0 0 1 7 12.5v5a.5.5 0 0 1-1 0v-2.882l-1.553 3.106a.5.5 0 0 1-.894 0L2 14.618V17.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .947-.224L4 16.382l2.053-4.106a.5.5 0 0 1 .562-.262M10.5 12a.5.5 0 0 1 .5.5v3.793l1.146-1.146a.502.502 0 0 1 .771.629a.5.5 0 0 1-.063.078l-2 2a.5.5 0 0 1-.114.082a.5.5 0 0 1-.339.054a.5.5 0 0 1-.142-.054a.5.5 0 0 1-.113-.082l-2-2a.5.5 0 1 1 .708-.707L10 16.293V12.5a.5.5 0 0 1 .5-.5M10 6.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5h-2.379l1.44-1.44a1.5 1.5 0 0 0 .103-2.006l-.104-.114l-.114-.104a1.5 1.5 0 0 0-1.446-.25V12.5a1.5 1.5 0 0 0-3 0v1.587a1.5 1.5 0 0 0-1 .002V12.5a1.5 1.5 0 0 0-1.031-1.425l-.124-.035l-.127-.024a1.5 1.5 0 0 0-1.497.7l-.063.113L4 14.145V3.5A1.5 1.5 0 0 1 5.5 2H10zm5.75.5H11.5a.5.5 0 0 1-.5-.5V2.25z");
}
</style><path class="issdh_8pd"/>`,
		"fallback": "fluent:document-markdown-20-filled",
	});
}

export default Component;
