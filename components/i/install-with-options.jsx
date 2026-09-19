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
		"content": `<style>.h9wvqd_un {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.584 14.306v9.71h-8.01l10.41 10.387l10.41-10.387h-8.009v-9.71zM21.74 45.4a21.5 21.5 0 0 1-11.895-5.18m-3.057-3.288A21.5 21.5 0 0 1 2.5 25.156m.228-4.483A21.5 21.5 0 0 1 7.767 9.86m3.286-3.057A21.5 21.5 0 0 1 21.74 2.6m4.482 0C37.179 3.746 45.5 12.983 45.5 24h0c0 11.015-8.318 20.251-19.272 21.4");
}
</style><path class="h9wvqd_un"/>`,
		"fallback": "arcticons:install-with-options",
	});
}

export default Component;
