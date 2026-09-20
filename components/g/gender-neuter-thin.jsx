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
		"content": `<style>.d145qrbaj {
  fill: currentColor;
  d: path("M204 104a76 76 0 1 0-80 75.89V232a4 4 0 0 0 8 0v-52.11A76.09 76.09 0 0 0 204 104m-76 68a68 68 0 1 1 68-68a68.07 68.07 0 0 1-68 68");
}
</style><path class="d145qrbaj"/>`,
		"fallback": "ph:gender-neuter-thin",
	});
}

export default Component;
