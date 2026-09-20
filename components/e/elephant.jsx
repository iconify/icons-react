import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytm83wbxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytm83wbxw"/>`,
		"fallback": "mdi:elephant",
	});
}

export default Component;
