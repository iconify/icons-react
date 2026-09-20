import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x76j6m_vu.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x76j6m_vu"/>`,
		"fallback": "memory:box-light-vertical-horizontal-stipple-up-left",
	});
}

export default Component;
