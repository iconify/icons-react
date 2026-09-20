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
		"content": `<style>.fwoxvrbrk {
  fill: currentColor;
  d: path("M140 16v32a12 12 0 0 1-24 0V16a12 12 0 0 1 24 0m36 36a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12m-48 144a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12m0-120a12 12 0 0 0-12 12v80a12 12 0 0 0 24 0V88a12 12 0 0 0-12-12M80 52a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0V64a12 12 0 0 0-12-12m96 72a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-56a12 12 0 0 0-12-12M32 100a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12m48 48a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12m144-48a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12");
}
</style><path class="fwoxvrbrk"/>`,
		"fallback": "ph:google-podcasts-logo-bold",
	});
}

export default Component;
