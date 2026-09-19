import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7_amibcp.css';
import '../../css/w/wob-_umgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7_amibcp"/><path class="wob-_umgw"/>`,
		"fallback": "bx:bxs-file-json",
	});
}

export default Component;
