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
		"content": `<style>.w4x522zjf {
  fill: currentColor;
  d: path("m21 18.266l-12-12v-.65q0-.691.463-1.153T10.616 4h2.769q.69 0 1.153.462T15 5.615V7h4.385q.69 0 1.152.463T21 8.616zM10 7h4V5.615q0-.23-.192-.423T13.385 5h-2.77q-.23 0-.423.192T10 5.615zm10.808 15.223L18.585 20H4.615q-.69 0-1.152-.462T3 18.384V8.616q0-.691.463-1.153T4.615 7H7v1.416L2.546 3.962l.708-.708l18.262 18.262z");
}
</style><path class="w4x522zjf"/>`,
		"fallback": "material-symbols-light:enterprise-off",
	});
}

export default Component;
