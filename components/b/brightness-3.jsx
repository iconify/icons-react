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
		"content": `<style>.ahr_45b_g {
  fill: currentColor;
  d: path("M9.192 21q-.252 0-.485-.026t-.476-.078q2.496-1.294 3.93-3.688T13.597 12t-1.434-5.208T8.23 3.104q.244-.052.477-.078T9.192 3q1.868 0 3.51.708t2.858 1.923t1.923 2.857q.71 1.642.71 3.509t-.71 3.51t-1.923 2.859t-2.858 1.925t-3.51.709");
}
</style><path class="ahr_45b_g"/>`,
		"fallback": "material-symbols-light:brightness-3",
	});
}

export default Component;
