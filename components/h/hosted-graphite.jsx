import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":294};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z3ih_sewc {
  fill: var(--svg-color--ec7a51, #ec7a51);
  d: path("M256 72.153v148.058l-129.55 73.328L0 220.21V72.153L126.45 0s24.605 14.52 36.674 20.703C194.374 36.722 256 72.153 256 72.153m-104.414-8.55v63.81H102.38v-63.81l-57.246 33.86v99.614l57.246 35.47V190.55l-39.395-24.106h88.602v66.102s38.569-25.232 55.318-35.47V97.463z");
}
</style><path class="z3ih_sewc"/>`,
		"fallback": "logos:hosted-graphite",
	});
}

export default Component;
