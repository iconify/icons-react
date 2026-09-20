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
		"content": `<style>.k7u50fbca {
  fill: currentColor;
  d: path("m12 23l-8-6V2h16v15zm-1.05-8l5.65-5.65l-1.4-1.45l-4.25 4.25l-2.1-2.1l-1.45 1.4z");
}
</style><path class="k7u50fbca"/>`,
		"fallback": "material-symbols:beenhere-sharp",
	});
}

export default Component;
