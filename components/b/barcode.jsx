import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgz_ywmly.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgz_ywmly"/>`,
		"fallback": "memory:barcode",
	});
}

export default Component;
