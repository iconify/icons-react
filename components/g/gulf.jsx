import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1u_yzaak.css';
import '../../css/d/dagp_7b_p.css';
import '../../css/v/vl4thlbxt.css';
import '../../css/v/vb_zqjsyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1u_yzaak"/><path class="dagp_7b_p"/><path class="vl4thlbxt"/><path class="vb_zqjsyg"/>`,
		"fallback": "token:gulf",
	});
}

export default Component;
