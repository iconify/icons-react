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
		"content": `<style>.uitdnubas {
  fill: currentColor;
  d: path("M2 22V2h2v20zm8.5-5V7h3v10zm9.5 5V2h2v20z");
}
</style><path class="uitdnubas"/>`,
		"fallback": "material-symbols:horizontal-distribute-outline-sharp",
	});
}

export default Component;
