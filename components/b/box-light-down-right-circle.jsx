import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctet27sra.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctet27sra"/>`,
		"fallback": "memory:box-light-down-right-circle",
	});
}

export default Component;
