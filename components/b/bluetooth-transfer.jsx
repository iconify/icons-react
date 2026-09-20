import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejqerdbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejqerdbvb"/>`,
		"fallback": "streamline-ultimate:bluetooth-transfer",
	});
}

export default Component;
