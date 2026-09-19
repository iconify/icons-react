import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhssn9pid.css';
import '../../css/i/iu35e1xme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mhssn9pid"/><circle class="iu35e1xme"/>`,
		"fallback": "bitcoin-icons:bitaxe-filled",
	});
}

export default Component;
