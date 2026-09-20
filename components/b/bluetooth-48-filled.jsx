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
		"content": `<style>.qlfid3bla {
  fill: currentColor;
  d: path("M22.89 4.13a1.5 1.5 0 0 1 1.613.255l10 9a1.5 1.5 0 0 1 .03 2.203L25.678 24l8.855 8.413a1.5 1.5 0 0 1-.03 2.202l-10 9A1.5 1.5 0 0 1 22 42.5V27.494l-7.467 7.093a1.5 1.5 0 1 1-2.066-2.175L21.322 24l-8.855-8.412a1.5 1.5 0 1 1 2.066-2.175L22 20.505V5.5a1.5 1.5 0 0 1 .89-1.37M25 27.494v11.638l6.29-5.662zm0-6.988l6.29-5.976L25 8.868z");
}
</style><path class="qlfid3bla"/>`,
		"fallback": "fluent:bluetooth-48-filled",
	});
}

export default Component;
