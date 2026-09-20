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
		"content": `<style>.z7k103kav {
  fill: currentColor;
  d: path("M12 22V4h9v8h-3v10zm-3-8q-2.5 0-4.25-1.75T3 8t1.75-4.25T9 2h1v12z");
}
</style><path class="z7k103kav"/>`,
		"fallback": "material-symbols:earbud-right-sharp",
	});
}

export default Component;
