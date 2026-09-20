import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tencocb7a {
  fill: currentColor;
  d: path("M228 148.4V136a100.41 100.41 0 0 0-64-93.3V40a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v2.7A100.41 100.41 0 0 0 28 136v12.4A20 20 0 0 0 12 168v24a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-24a20 20 0 0 0-16-19.6M204 136v12h-40V69.07A76.35 76.35 0 0 1 204 136m-64-92v104h-24V44ZM92 69.07V148H52v-12a76.35 76.35 0 0 1 40-66.93M220 188H36v-16h184Z");
}
</style><path class="tencocb7a"/>`,
		"fallback": "ph:hard-hat-bold",
	});
}

export default Component;
