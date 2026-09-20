import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmb3itboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mmb3itboa"/>`,
		"fallback": "reicon:car-filled",
	});
}

export default Component;
