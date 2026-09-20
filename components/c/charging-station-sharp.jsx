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
		"content": `<style>.wwdm3rb6j {
  fill: currentColor;
  d: path("M11.577 16.23v-3.384H9.884l2.539-5.077v3.385h1.693zM6 22V2h12v20zm1-3.5h10v-13H7z");
}
</style><path class="wwdm3rb6j"/>`,
		"fallback": "material-symbols-light:charging-station-sharp",
	});
}

export default Component;
