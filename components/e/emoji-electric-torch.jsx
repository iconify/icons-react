import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ojoh1n-vi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.299 24.321A7.493 7.493 0 1 1 23.896 34.92l-3.052 3.052l-10.597-10.597zM8.394 29.71l-2.894.742m7.318 4.438l-2.944 2.871m8.295 1.832l-.823 2.747");
}

.qcnqbgb6k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.67 22.133L37.062 5.74s1.118-.636 3.454 1.7s1.96 3.715 1.96 3.715L26.085 27.548");
}
</style><path class="qcnqbgb6k"/><path class="ojoh1n-vi"/>`,
		"fallback": "arcticons:emoji-electric-torch",
	});
}

export default Component;
