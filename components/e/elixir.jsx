import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1j4pw88e.css';
import '../../css/v/vchls_btl.css';
import '../../css/e/ejfm2-94j.css';
import '../../css/t/t9egpnbaz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1j4pw88e"/><path class="vchls_btl"/><path class="ejfm2-94j"/><path class="t9egpnbaz"/>`,
		"fallback": "devicon-plain:elixir",
	});
}

export default Component;
