import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pwah1qiqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.65 18.28a6.89 6.89 0 0 1 6.891-6.89h14.918a6.89 6.89 0 0 0 6.89-6.89h0h-21.808M9.65 31.717a6.89 6.89 0 0 1 6.891-6.89h7.648a6.89 6.89 0 0 0 6.89-6.89h0h-14.538a6.89 6.89 0 0 0-6.89 6.89");
}

.whvegrbth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.541 17.936V11.39m0-6.89a6.89 6.89 0 0 0-6.89 6.89V43.5h0a6.89 6.89 0 0 0 6.89-6.89V24.827");
}
</style><path class="whvegrbth"/><path class="pwah1qiqd"/>`,
		"fallback": "arcticons:faded-icon-pack",
	});
}

export default Component;
