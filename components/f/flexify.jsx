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
		"content": `<style>.oomn6gbok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24.093h37M30.84 13.16v21.812M17.718 7.396v33.208");
}
</style><path class="oomn6gbok"/>`,
		"fallback": "arcticons:flexify",
	});
}

export default Component;
