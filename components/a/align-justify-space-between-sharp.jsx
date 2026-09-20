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
		"content": `<style>.cvkgekbcz {
  fill: currentColor;
  d: path("M20 22v-5h-3V7h3V2h2v20zM2 22V2h2v5h3v10H4v5z");
}
</style><path class="cvkgekbcz"/>`,
		"fallback": "material-symbols:align-justify-space-between-sharp",
	});
}

export default Component;
