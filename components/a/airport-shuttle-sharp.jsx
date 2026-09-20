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
		"content": `<style>.ojwxr3bmk {
  fill: currentColor;
  d: path("M3.875 18.125Q3 17.25 3 16H1V5h16l6 6v5h-2q0 1.25-.875 2.125T18 19t-2.125-.875T15 16H9q0 1.25-.875 2.125T6 19t-2.125-.875M15 10h4l-3-3h-1zm-6 0h4V7H9zm-6 0h4V7H3zm3.888 6.888q.362-.363.362-.888t-.363-.888T6 14.75t-.888.363T4.75 16t.363.888t.887.362t.888-.363m12 0q.362-.362.362-.887t-.363-.888T18 14.75t-.888.363t-.362.887t.363.888t.887.362t.888-.363");
}
</style><path class="ojwxr3bmk"/>`,
		"fallback": "material-symbols:airport-shuttle-sharp",
	});
}

export default Component;
