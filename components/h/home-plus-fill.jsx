import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixr32ep7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixr32ep7b"/>`,
		"fallback": "mage:home-plus-fill",
	});
}

export default Component;
