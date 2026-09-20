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
		"content": `<style>.t9q24pbhk {
  fill: currentColor;
  d: path("M14.498 18q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293m-5.048-.262l5.789-5.788l-.689-.688l-5.789 5.788zM9.498 13q.416 0 .709-.291t.293-.707t-.291-.709T9.502 11t-.709.291t-.293.707t.291.709t.707.293M5 21V3h9.5L19 7.5V21zm9-13V4H6v16h12V8zM6 4v4zv16z");
}
</style><path class="t9q24pbhk"/>`,
		"fallback": "material-symbols-light:heap-snapshot-large-outline-sharp",
	});
}

export default Component;
