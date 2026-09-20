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
		"content": `<style>.drgxc5beb {
  fill: currentColor;
  d: path("M12.539 17.616q-.262 0-.439-.177T11.923 17v-4q0-.261.177-.438t.439-.177h4q.261 0 .438.177t.177.438v1.462L19 13.489v3.022l-1.846-.972V17q0 .262-.177.439t-.438.177zM5 20V9.5l7-5.27l7 5.27V11h-1v-1l-6-4.5L6 10v9h13v1zm7-7.75");
}
</style><path class="drgxc5beb"/>`,
		"fallback": "material-symbols-light:camera-outdoor-outline",
	});
}

export default Component;
