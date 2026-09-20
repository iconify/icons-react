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
		"content": `<style>.x9qv6vb0g {
  fill: currentColor;
  d: path("M3.385 19.385v-1h17.23v1zm1.615-3V7h4.616q0-.98.701-1.683q.702-.702 1.683-.702t1.683.702T14.385 7H19v9.385zm11.692-1H18V8h-1.308zM10.5 7h3q0-.65-.425-1.075T12 5.5t-1.075.425T10.5 7m-3.192 8.385V8H6v7.385zM8.192 8v7.385h7.616V8zm-.884 7.385h.884zm9.384 0h-.884zm-9.384 0H6zm.884 0h7.616zm8.5 0H18z");
}
</style><path class="x9qv6vb0g"/>`,
		"fallback": "material-symbols-light:checked-bag-outline-sharp",
	});
}

export default Component;
