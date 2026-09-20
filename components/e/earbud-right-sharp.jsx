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
		"content": `<style>.z1aue5hyq {
  fill: currentColor;
  d: path("M12.442 21V5H20v6.673h-2.788V21zm-3.48-7.327q-2.116 0-3.539-1.586T4 8.327t1.423-3.75T8.961 3h.731v10.673z");
}
</style><path class="z1aue5hyq"/>`,
		"fallback": "material-symbols-light:earbud-right-sharp",
	});
}

export default Component;
