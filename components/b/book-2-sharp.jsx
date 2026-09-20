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
		"content": `<style>.qjtj7w44a {
  fill: currentColor;
  d: path("M7.616 21q-1.085 0-1.85-.766Q5 19.47 5 18.385V6q0-1.258.871-2.129T8 3h11v13.77q-.663 0-1.14.475t-.475 1.14t.476 1.139T19 20v1zm.769-5.23h1V4h-1zM7.615 20h9.364q-.285-.33-.44-.732q-.155-.4-.155-.884q0-.457.152-.87t.443-.745H7.616q-.689 0-1.152.476T6 18.385q0 .688.464 1.151T7.616 20");
}
</style><path class="qjtj7w44a"/>`,
		"fallback": "material-symbols-light:book-2-sharp",
	});
}

export default Component;
