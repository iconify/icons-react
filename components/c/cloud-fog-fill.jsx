import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi6hjcbpj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi6hjcbpj"/>`,
		"fallback": "bi:cloud-fog-fill",
	});
}

export default Component;
