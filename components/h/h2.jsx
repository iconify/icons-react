import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdur_ohrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdur_ohrp"/>`,
		"fallback": "heroicons:h2",
	});
}

export default Component;
