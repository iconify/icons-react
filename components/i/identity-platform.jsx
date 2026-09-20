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
		"content": `<style>.so0lombvv {
  fill: currentColor;
  d: path("m12 20.175l5.6-3.425q-1.25-.875-2.675-1.312T12 15t-2.937.438t-2.713 1.287zm2.475-8.2Q15.5 10.95 15.5 9.5t-1.025-2.475T12 6T9.525 7.025T8.5 9.5t1.025 2.475T12 13t2.475-1.025M12 22.5L3 17V7l9-5.5L21 7v10z");
}
</style><path class="so0lombvv"/>`,
		"fallback": "material-symbols:identity-platform",
	});
}

export default Component;
