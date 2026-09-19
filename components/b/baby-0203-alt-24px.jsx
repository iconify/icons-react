import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtk5vsb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtk5vsb4x"/>`,
		"fallback": "healthicons:baby-0203-alt-24px",
	});
}

export default Component;
