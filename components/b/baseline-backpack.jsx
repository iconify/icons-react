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
		"content": `<style>.pda2j5bfd {
  fill: currentColor;
  d: path("M20 8v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.86 1.28-3.41 3-3.86V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86M6 12v2h10v2h2v-4z");
}
</style><path class="pda2j5bfd"/>`,
		"fallback": "ic:baseline-backpack",
	});
}

export default Component;
