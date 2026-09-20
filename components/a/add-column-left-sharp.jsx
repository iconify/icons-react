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
		"content": `<style>.q8flc_hcg {
  fill: currentColor;
  d: path("M13.442 20V4H21v16zM5 20v-3.138q.125.011.244.017t.256.006q2.027 0 3.456-1.421T10.385 12t-1.43-3.463T5.5 7.116q-.137 0-.256.005T5 7.14V4h7.442v16zm0-5.5v-2H3v-1h2v-2h1v2h2v1H6v2z");
}
</style><path class="q8flc_hcg"/>`,
		"fallback": "material-symbols-light:add-column-left-sharp",
	});
}

export default Component;
