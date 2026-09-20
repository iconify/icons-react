import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3imbrjdi.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3imbrjdi"/>`,
		"fallback": "memory:box-light-fold-up-left",
	});
}

export default Component;
