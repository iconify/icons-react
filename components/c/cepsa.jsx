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
		"content": `<style>.pbxx3mb5n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43 37.751V25.878c0-9.119-7.392-16.51-16.51-16.51H12.822v7.054l22.634.016l.093 21.248z");
}

.rxhn-ez-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5 19.122l7.82 2.818l-.106 13.914l-7.573 2.748zm15.112.03l7.82 2.818l-.105 13.915l-7.574 2.748z");
}
</style><path class="rxhn-ez-p"/><path class="pbxx3mb5n"/>`,
		"fallback": "arcticons:cepsa",
	});
}

export default Component;
