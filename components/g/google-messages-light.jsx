import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyp46zrds.css';
import '../../css/s/s4z2tns2t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyp46zrds"/><path class="s4z2tns2t"/>`,
		"fallback": "selfhst:google-messages-light",
	});
}

export default Component;
