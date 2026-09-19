import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrgayabaj.css';
import '../../css/a/amcez-bxb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrgayabaj"/><path class="amcez-bxb"/>`,
		"fallback": "ion:cloud-upload-outline",
	});
}

export default Component;
