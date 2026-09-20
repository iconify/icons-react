import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvlmg9bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvlmg9bcn"/>`,
		"fallback": "reicon:external-drive-filled",
	});
}

export default Component;
