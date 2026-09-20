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
		"content": `<style>.yg7279bhy {
  fill: currentColor;
  d: path("M188.45 96A38 38 0 0 0 168 26H96a38 38 0 0 0-20.45 70A38 38 0 0 0 77 160.89A42 42 0 1 0 142 196v-40.32A38 38 0 1 0 188.45 96M194 64a26 26 0 0 1-26 26h-26V38h26a26 26 0 0 1 26 26M70 64a26 26 0 0 1 26-26h34v52H96a26 26 0 0 1-26-26m26 90a26 26 0 0 1 0-52h34v52zm34 42a30 30 0 1 1-30-30h30Zm38-42a26 26 0 1 1 26-26a26 26 0 0 1-26 26");
}
</style><path class="yg7279bhy"/>`,
		"fallback": "ph:figma-logo-light",
	});
}

export default Component;
