import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-j2pusqo.css';
import '../../css/x/xyjb4z0fe.css';
import '../../css/y/yrx0xp_ba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-j2pusqo"/><path class="xyjb4z0fe"/><path class="yrx0xp_ba"/>`,
		"fallback": "streamline-ultimate:coding-apps-website-data-conversion-documents-1-bold",
	});
}

export default Component;
