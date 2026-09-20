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
		"content": `<style>.gge8dnbhm {
  fill: currentColor;
  d: path("M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H36V68h184ZM52 128a44 44 0 0 1 66-38.11a12 12 0 0 1-12 20.78a20 20 0 1 0 0 34.66a12 12 0 1 1 12 20.77A44 44 0 0 1 52 128m80 0a44 44 0 0 1 66-38.11a12 12 0 0 1-12 20.78a20 20 0 1 0 0 34.66a12 12 0 1 1 12 20.77a44 44 0 0 1-66-38.1");
}
</style><path class="gge8dnbhm"/>`,
		"fallback": "ph:closed-captioning-bold",
	});
}

export default Component;
