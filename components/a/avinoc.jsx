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
		"content": `<style>.dnnn5h5pq {
  d: path("M7.373 4.059h7.2L11.74 5.647H8.4L4.8 12l3.6 6.353h7.2L18.94 12L17.4 9.353l.26-3.177L21 12l-4.373 7.941H7.373L3 12z");
}

.k3j_vhiyn {
  d: path("m7.373 10.412l9.513-6.353L15.6 15.176l-2.573-4.764z");
}

.n1mjunbsu {
  fill: var(--svg-color--fff, #fff);
}
</style><g class="n1mjunbsu"><path class="dnnn5h5pq"/><path class="k3j_vhiyn"/></g>`,
		"fallback": "token-branded:avinoc",
	});
}

export default Component;
