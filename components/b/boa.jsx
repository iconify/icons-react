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
		"content": `<style>.d1vei4bpn {
  fill-rule: evenodd;
  d: path("M3 8.063h18v2.812h-1.125l.281 9H21V21H3v-1.125h.844l.281-9H3zm4.5 2.812h2.813l-.372 9h-2.11zm6.187 0H16.5l-.371 9h-2.11z");
}

.dkamf7b5c {
  d: path("M5.25 6.937L11.978 3l6.772 3.937z");
}

.ppa-drbvn {
  fill: var(--svg-color--004f9e, #004f9e);
}
</style><g class="ppa-drbvn"><path clip-rule="evenodd" class="d1vei4bpn"/><path class="dkamf7b5c"/></g>`,
		"fallback": "token-branded:boa",
	});
}

export default Component;
