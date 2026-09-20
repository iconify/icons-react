import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzgd0m_6f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzgd0m_6f"/>`,
		"fallback": "roentgen:car-sharing",
	});
}

export default Component;
