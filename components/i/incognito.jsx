import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv2a2abyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv2a2abyv"/>`,
		"fallback": "streamline-ultimate:incognito",
	});
}

export default Component;
