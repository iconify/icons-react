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
		"content": `<style>.kdh6up-ah {
  fill: currentColor;
  d: path("M226.06 20.57a4 4 0 0 0-3.94-.1L103 84H32a12 12 0 0 0-12 12v104a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12v-32a4 4 0 0 0-.17-1.15L108.77 90L220 30.67V160a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4v-8a4 4 0 0 0-8 0v8a12 12 0 0 0 12 12h16a12 12 0 0 0 12-12V24a4 4 0 0 0-1.94-3.43M101 92l21.6 72H60V92Zm-69 0h20v72H28V96a4 4 0 0 1 4-4m88 112H32a4 4 0 0 1-4-4v-28h96v28a4 4 0 0 1-4 4");
}
</style><path class="kdh6up-ah"/>`,
		"fallback": "ph:crane-thin",
	});
}

export default Component;
