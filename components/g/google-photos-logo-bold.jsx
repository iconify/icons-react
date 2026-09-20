import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmzf_cekc.css';
import '../../css/y/yybosibpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmzf_cekc"/><path class="yybosibpn"/>`,
		"fallback": "streamline-ultimate:google-photos-logo-bold",
	});
}

export default Component;
