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
		"content": `<style>.bzqabs8wk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.842 5.5l29.375 24.707l-14.712-3.739zm28.593 26.296L6.783 26.615l20.577 9.238zm.171 1.784L19.858 42.5l12.292-.806z");
}
</style><path class="bzqabs8wk"/>`,
		"fallback": "arcticons:3dmark",
	});
}

export default Component;
