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
		"content": `<style>.r1kd6h6tt {
  fill: currentColor;
  d: path("M188 52a23.9 23.9 0 0 0-16 6.13V44a24 24 0 0 0-47.93-1.8A24 24 0 0 0 84 60v78l-11.25-18.06a24 24 0 0 0-41.62 23.92C64.44 214.12 82.17 236 128 236a84.09 84.09 0 0 0 84-84V76a24 24 0 0 0-24-24m16 100a76.09 76.09 0 0 1-76 76c-37.29 0-53.59-11.51-89.71-87.71l-.15-.29a16 16 0 0 1 27.71-16a1 1 0 0 1 .07.12l18.68 30A4 4 0 0 0 92 152V60a16 16 0 0 1 32 0v60a4 4 0 0 0 8 0V44a16 16 0 0 1 32 0v76a4 4 0 0 0 8 0V76a16 16 0 0 1 32 0Z");
}
</style><path class="r1kd6h6tt"/>`,
		"fallback": "ph:hand-thin",
	});
}

export default Component;
