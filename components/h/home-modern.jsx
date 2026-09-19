import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/solu_m_dz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="solu_m_dz"/>`,
		"fallback": "heroicons-solid:home-modern",
	});
}

export default Component;
