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
		"content": `<style>.idhjjoiby {
  fill: var(--svg-color--27a8e0, #27a8e0);
  d: path("m57.697 89.561l27.92 58.238l51.045-116.244l56.305 138.983l17.943-40.372H256V128C256 57.31 198.69 0 128 0S0 57.31 0 128v2.166h36.97zM192.58 203.176L135.811 93.428l-50.503 90.877l-28.075-64.735l-13.69 26.915H1.315C10.286 208.435 63.575 256 128 256s117.79-47.642 126.685-109.593h-35.267z");
}
</style><path class="idhjjoiby"/>`,
		"fallback": "logos:codebeat",
	});
}

export default Component;
