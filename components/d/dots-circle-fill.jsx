import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viud3_gtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viud3_gtn"/>`,
		"fallback": "mage:dots-circle-fill",
	});
}

export default Component;
