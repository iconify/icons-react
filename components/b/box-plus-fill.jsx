import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plzwab3-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plzwab3-f"/>`,
		"fallback": "mage:box-plus-fill",
	});
}

export default Component;
