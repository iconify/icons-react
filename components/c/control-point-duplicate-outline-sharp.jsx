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
		"content": `<style>.cb9mdlbeu {
  fill: currentColor;
  d: path("M14.5 15.308h1V12.5h2.808v-1H15.5V8.692h-1V11.5h-2.808v1H14.5zM6 19.423q-2.263-.95-3.632-2.96T1 12t1.368-4.462T6 4.576V5.7q-1.85.875-2.925 2.575T2 12t1.075 3.725T6 18.3zm5.882-.049q-1.455-.626-2.542-1.713t-1.714-2.543T7 12t.626-3.118T9.34 6.34t2.542-1.714T15 4t3.118.626t2.543 1.714t1.713 2.542T23 12t-.626 3.118t-1.714 2.542t-2.542 1.714T15 20t-3.118-.626M15 19q2.925 0 4.963-2.037T22 12t-2.037-4.962T15 5t-4.962 2.038T8 12t2.038 4.963T15 19");
}
</style><path class="cb9mdlbeu"/>`,
		"fallback": "material-symbols-light:control-point-duplicate-outline-sharp",
	});
}

export default Component;
