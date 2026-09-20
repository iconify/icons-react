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
		"content": `<style>.zpzhyojuw {
  fill: currentColor;
  d: path("M4 22V8q0-1.4.85-2.45T7 4.15V2h3v2h4V2h3v2.15q1.3.35 2.15 1.4T20 8v14zm10.5-6h2v-4h-9v2h7z");
}
</style><path class="zpzhyojuw"/>`,
		"fallback": "material-symbols:backpack-sharp",
	});
}

export default Component;
