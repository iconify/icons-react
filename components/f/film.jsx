import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdi_3fcru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdi_3fcru"/>`,
		"fallback": "noviair:film",
	});
}

export default Component;
