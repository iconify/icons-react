import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwevi1blv.css';
import '../../css/g/gcu8p7duh.css';
import '../../css/k/kbgi4yo0u.css';
import '../../css/y/y6nhdpbwn.css';
import '../../css/h/he_903b2n.css';
import '../../css/d/dsaznjbix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwevi1blv"/><path class="gcu8p7duh"/><path class="kbgi4yo0u"/><path class="y6nhdpbwn"/><path class="he_903b2n"/><path class="dsaznjbix"/>`,
		"fallback": "selfhst:folding-home-dark",
	});
}

export default Component;
