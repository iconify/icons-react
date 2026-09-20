import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-uz5nbgx.css';
import '../../css/x/xifkqvb3u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w-uz5nbgx"/><path class="xifkqvb3u"/>`,
		"fallback": "selfhst:dumbkan",
	});
}

export default Component;
