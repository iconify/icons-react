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
		"content": `<style>.p85svyawr {
  fill: currentColor;
  d: path("M5 19v-6h2v4h4v2zm12-8V7h-4V5h6v6z");
}
</style><path class="p85svyawr"/>`,
		"fallback": "material-symbols:expand-content-sharp",
	});
}

export default Component;
