import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":267};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e3-4epbip {
  fill: var(--svg-color--bcae79, #bcae79);
  d: path("m50.273.304l51.7 88.78h102.684L152.601.304zm1.961 178.629L102.864 267h101.793l-50.986-88.067z");
}

.kpbcf1bnw {
  fill: var(--svg-color--59666c, #59666c);
  d: path("m153.671 178.933l-.932 2.757l49.137 83.342l2.781 1.968L256 178.22l-51.342-89.137zM50.273.304L0 89.084l52.234 89.849l49.738-89.85l-.134-3.63L52.565 2.11z");
}
</style><path class="kpbcf1bnw"/><path class="e3-4epbip"/>`,
		"fallback": "logos:hibernate",
	});
}

export default Component;
