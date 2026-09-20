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
		"content": `<style>.d0sdbdb1b {
  fill: currentColor;
  d: path("m17.962 15.117l-.708-.707l3.705-3.706l.714.708zm-1.696-1.682l-5.677-5.671L14.3 4.058l5.671 5.67zm4.682 8.934l-6.738-6.732l-3.152 3.151H2.75v-2.93q.908-.408 1.771-.828q.864-.42 1.664-1.016l1.206 1.205l.757-.757l-1.17-1.17l.273-.272q.13-.13.291-.278l1.17 1.17l.661-.662l-1.256-1.256q.131-.16.234-.338t.178-.383l1.408 1.408l.661-.662l-8.544-8.544l.708-.714l18.894 18.9z");
}
</style><path class="d0sdbdb1b"/>`,
		"fallback": "material-symbols-light:do-not-step-sharp",
	});
}

export default Component;
