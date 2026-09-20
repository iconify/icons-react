import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpnw-rbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpnw-rbon"/>`,
		"fallback": "meteor-icons:align-center",
	});
}

export default Component;
