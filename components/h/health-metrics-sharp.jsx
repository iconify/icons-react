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
		"content": `<style>.b9-ladb7e {
  fill: currentColor;
  d: path("M8 20.846V16H3.154v-3.5h5.565l1.835 2.748h.915l1.677-5.132l1.592 2.384h6.108V16H16v4.846zm2.854-6.961L9.256 11.5H3.154V8H8V3.154h8V8h4.846v3.5h-5.59L13.44 8.758h-.91z");
}
</style><path class="b9-ladb7e"/>`,
		"fallback": "material-symbols-light:health-metrics-sharp",
	});
}

export default Component;
