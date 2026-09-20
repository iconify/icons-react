import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y5b2wxbak {
  fill: currentColor;
  d: path("M10.018 5.486a1 1 0 0 1 1.592-.806l5.88 4.311a1.25 1.25 0 0 1 0 2.017l-5.88 4.311a1 1 0 0 1-1.592-.806v-3.16L4.61 15.319a1 1 0 0 1-1.592-.806V5.486A1 1 0 0 1 4.61 4.68l5.408 3.966zm6.88 4.312l-5.88-4.312v9.027l5.88-4.312a.25.25 0 0 0 0-.403m-7 0l-5.88-4.312v9.027l5.88-4.312a.25.25 0 0 0 0-.403");
}
</style><path class="y5b2wxbak"/>`,
		"fallback": "fluent:fast-forward-20-regular",
	});
}

export default Component;
