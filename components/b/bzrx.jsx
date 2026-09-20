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
		"content": `<style>.bpiqguboz {
  d: path("M3 6.6A3.6 3.6 0 0 1 6.6 3h2.025v3.937h1.688V3H17.4A3.6 3.6 0 0 1 21 6.6v10.8a3.6 3.6 0 0 1-3.6 3.6H6.6A3.6 3.6 0 0 1 3 17.4v-7.087h10.239c.36 0 .448.236.448.597v2.215c0 .362-.2.563-.562.563h-2.271c-.362 0-.541-.285-.541-.646v-1.604H8.625V13.3c0 1.357.875 2.075 2.229 2.075h2.385c1.354 0 2.136-.718 2.136-2.075v-2.39c0-1.356-.783-2.285-2.136-2.285H3z");
}

.ft5dv1b6b {
  fill: none;
}

.ls8pmobci {
  stop-color: var(--svg-color--003cda, #003cda);
}

.n1y79_3dl {
  stop-color: var(--svg-color--33dfcc, #33dfcc);
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGZUrmId2p)" class="bpiqguboz"/><defs><linearGradient id="SVGZUrmId2p" x1="19.83" x2="5.43" y1="19.83" y2="5.43" gradientUnits="userSpaceOnUse"><stop offset=".159" class="ls8pmobci"/><stop offset="1" class="n1y79_3dl"/></linearGradient></defs></g>`,
		"fallback": "token-branded:bzrx",
	});
}

export default Component;
