import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o0uszjbnf {
  fill: currentColor;
  d: path("M6.385 2.351a.75.75 0 0 0-1.27.798L11.3 13H2.75a.75.75 0 0 0-.75.75V14c0 6.628 5.373 12 12 12s12-5.372 12-12v-.25a.75.75 0 0 0-.75-.75h-7.178L11.385 2.351a.75.75 0 0 0-1.27.798L16.3 13h-3.228zm10.879 12.183l.054-.034h7.17a10.4 10.4 0 0 1-.423 2.5H3.935a10.5 10.5 0 0 1-.423-2.5h8.73l.022.034l.054-.034h4.924zM23.49 18.5a10.5 10.5 0 0 1-9.49 6a10.5 10.5 0 0 1-9.49-6z");
}
</style><path class="o0uszjbnf"/>`,
		"fallback": "fluent:bowl-chopsticks-28-regular",
	});
}

export default Component;
