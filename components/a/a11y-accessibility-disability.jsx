import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uzom6mbpj.css';
import '../../css/q/q5n6f-beh.css';
import '../../css/e/ebc_6bb9s.css';
import '../../css/c/cjlay9i0m.css';
import '../../css/k/kjmyri7xa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uzom6mbpj"/><path class="q5n6f-beh"/><path class="ebc_6bb9s"/><path class="cjlay9i0m"/><path class="kjmyri7xa"/></g>`,
		"fallback": "streamline-ultimate:a11y-accessibility-disability",
	});
}

export default Component;
