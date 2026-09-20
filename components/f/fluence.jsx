import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ax416ervf {
  fill-rule: evenodd;
  d: path("M11.35 3h1.368v3.02a6.024 6.024 0 0 1 0 11.96V21h-1.369v-3.011a6.024 6.024 0 0 1 0-11.977zm0 4.392a4.655 4.655 0 0 0 0 9.217zm1.368 9.207a4.655 4.655 0 0 0 0-9.197z");
}
</style><path clip-rule="evenodd" class="ax416ervf"/>`,
		"fallback": "token-branded:fluence",
	});
}

export default Component;
