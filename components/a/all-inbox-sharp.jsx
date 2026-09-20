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
		"content": `<style>.r-g0qac3b {
  fill: currentColor;
  d: path("M14 13q.85 0 1.425-.587T16 11h4V4H8v7h4q0 .825.588 1.413T14 13m-8 5V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="r-g0qac3b"/>`,
		"fallback": "material-symbols:all-inbox-sharp",
	});
}

export default Component;
