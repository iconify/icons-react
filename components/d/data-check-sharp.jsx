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
		"content": `<style>.k9ng-6mrs {
  fill: currentColor;
  d: path("m15.3 10.25l3.525-3.55l-.7-.7L15.3 8.825L13.875 7.4l-.7.725zM3 20v-2h12v2zm9.463-8.462Q11 10.075 11 8t1.463-3.537T16 3t3.538 1.463T21 8t-1.463 3.538T16 13t-3.537-1.463M3 12v-2h6.3q.175.55.4 1.05t.55.95zm0 4v-2h9.4q.575.35 1.225.588t1.375.337V16z");
}
</style><path class="k9ng-6mrs"/>`,
		"fallback": "material-symbols:data-check-sharp",
	});
}

export default Component;
