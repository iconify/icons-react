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
		"content": `<style>.v0xj9li7u {
  fill: currentColor;
  d: path("M1 12v-2h2v2zm10.825 11q-.6 0-1.15-.225t-.975-.65L4.6 17l.825-.85q.35-.35.85-.475t1 0l1.725.5V8q0-.425.288-.712T10 7t.713.288T11 8v7h1v-3q0-.425.288-.712T13 11t.713.288T14 12v3h1v-2q0-.425.288-.712T16 12t.713.288T17 13v2h1q0-.425.288-.712T19 14t.713.288T20 15v4q0 1.65-1.175 2.825T16 23zM1 8V6h2v2zm4 4v-2h2v2zm12 0v-2h2v2zm4 0v-2h2v2zM1 4V2h2v2zm4 0V2h2v2zm4 0V2h2v2zm4 0V2h2v2zm4 0V2h2v2zm4 4V6h2v2zm0-4V2h2v2z");
}
</style><path class="v0xj9li7u"/>`,
		"fallback": "material-symbols:gesture-select",
	});
}

export default Component;
