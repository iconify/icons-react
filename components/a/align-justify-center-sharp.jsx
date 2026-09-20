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
		"content": `<style>.dwcoexbss {
  fill: currentColor;
  d: path("M11 22V2h2v20zm4-5V7h3v10zm-9 0V7h3v10z");
}
</style><path class="dwcoexbss"/>`,
		"fallback": "material-symbols:align-justify-center-sharp",
	});
}

export default Component;
