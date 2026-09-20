import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iin_flbnk.css';
import '../../css/x/xvwzm4bzj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iin_flbnk"/><path class="xvwzm4bzj"/>`,
		"fallback": "selfhst:bitwarden",
	});
}

export default Component;
