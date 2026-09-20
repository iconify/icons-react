import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lt-hslb1a {
  fill: currentColor;
  d: path("M15 10.25A2.75 2.75 0 0 0 17.75 13H25v9.25A2.75 2.75 0 0 1 22.25 25H5.75A2.75 2.75 0 0 1 3 22.25V5.75A2.75 2.75 0 0 1 5.75 3H15zm1.5-7.028c.32.136.615.333.866.584l6.828 6.828c.251.25.448.546.584.866H17.75c-.69 0-1.25-.56-1.25-1.25z");
}
</style><path class="lt-hslb1a"/>`,
		"fallback": "fluent:document-square-28-filled",
	});
}

export default Component;
