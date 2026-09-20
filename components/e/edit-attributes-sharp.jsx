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
		"content": `<style>.dfgq5ibem {
  fill: currentColor;
  d: path("M7 17q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h10q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17zm1.05-2.7l3.55-3.55l-1.05-1.05l-2.5 2.5l-1-1L6 12.25z");
}
</style><path class="dfgq5ibem"/>`,
		"fallback": "material-symbols:edit-attributes-sharp",
	});
}

export default Component;
