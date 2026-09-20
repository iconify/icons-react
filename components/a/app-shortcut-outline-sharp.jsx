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
		"content": `<style>.u0orcsdpn {
  fill: currentColor;
  d: path("M18.38 12.5h-6.995v3.616h-1V11.5h7.996l-2.089-2.1l.708-.708L20.308 12L17 15.308l-.708-.708zM6 22V2h12v4.923h-1V5.5H7v13h10v-1.423h1V22zm1-2.5V21h10v-1.5zm0-15h10V3H7zm0 0V3zm0 15V21z");
}
</style><path class="u0orcsdpn"/>`,
		"fallback": "material-symbols-light:app-shortcut-outline-sharp",
	});
}

export default Component;
