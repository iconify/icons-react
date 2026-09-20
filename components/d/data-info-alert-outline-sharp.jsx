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
		"content": `<style>.lipjsib7r {
  fill: currentColor;
  d: path("M3 20v-2h12v2zm9.463-8.462Q11 10.075 11 8t1.463-3.537T16 3t3.538 1.463T21 8t-1.463 3.538T16 13t-3.537-1.463M3 12v-2h6.3q.175.55.4 1.05t.55.95zm0 4v-2h9.4q.575.35 1.225.588t1.375.337V16zm12.5-5h1V7h-1zm.85-5.15q.15-.15.15-.35t-.15-.35T16 5t-.35.15t-.15.35t.15.35T16 6t.35-.15");
}
</style><path class="lipjsib7r"/>`,
		"fallback": "material-symbols:data-info-alert-outline-sharp",
	});
}

export default Component;
