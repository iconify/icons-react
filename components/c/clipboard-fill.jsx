import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfs3dk6ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfs3dk6ul"/>`,
		"fallback": "mage:clipboard-fill",
	});
}

export default Component;
