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
		"content": `<style>.hppw5abhw {
  fill: currentColor;
  d: path("M8 20.846V16H3.154v-3.5h5.565l1.854 2.78q.068.105.168.162t.232.058q.173 0 .304-.094t.192-.26l1.677-5.03l1.427 2.146q.076.106.189.172T15 12.5h5.846V16H16v4.846zm2.854-6.961l-1.452-2.166q-.067-.104-.167-.161T9 11.5H3.154V8H8V3.154h8V8h4.846v3.5h-5.59L13.42 8.72q-.064-.098-.18-.159t-.245-.061q-.167 0-.285.094t-.18.26z");
}
</style><path class="hppw5abhw"/>`,
		"fallback": "material-symbols-light:health-metrics",
	});
}

export default Component;
