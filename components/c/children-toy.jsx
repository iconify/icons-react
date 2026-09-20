import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy7ho_3pd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy7ho_3pd"/>`,
		"fallback": "mdi:children-toy",
	});
}

export default Component;
