import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovm_cjbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovm_cjbak"/>`,
		"fallback": "mage:filter-2",
	});
}

export default Component;
