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
		"content": `<style>.da79h8b_e {
  fill: currentColor;
  d: path("M5 23V1h14v5.1h1v4.8h-1V23zm3-7h8v-3q-.425 0-.712-.288T15 12t.288-.712T16 11V8H8v3q.425 0 .713.288T9 12t-.288.713T8 13zm3.65-1.65q-.15-.15-.15-.35t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15t-.35-.15m0-2q-.15-.15-.15-.35t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15t-.35-.15m0-2q-.15-.15-.15-.35t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15t-.35-.15");
}
</style><path class="da79h8b_e"/>`,
		"fallback": "material-symbols:book-online-sharp",
	});
}

export default Component;
