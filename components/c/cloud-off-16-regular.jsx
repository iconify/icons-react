import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xn6jnobum {
  fill: currentColor;
  d: path("m12.254 12.961l1.892 1.893a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708L4.45 5.156c-.215.414-.36.87-.419 1.351A3.25 3.25 0 0 0 4.25 13h7.5q.257 0 .504-.039M11.293 12H4.25a2.25 2.25 0 0 1 0-4.5h.25A.5.5 0 0 0 5 7c0-.384.072-.751.204-1.09zM14 9.75c0 .59-.227 1.128-.6 1.53l.708.707a3.25 3.25 0 0 0-2.138-5.48a4 4 0 0 0-6.182-2.84l.726.726A3 3 0 0 1 11 7a.5.5 0 0 0 .5.5h.25A2.25 2.25 0 0 1 14 9.75");
}
</style><path class="xn6jnobum"/>`,
		"fallback": "fluent:cloud-off-16-regular",
	});
}

export default Component;
