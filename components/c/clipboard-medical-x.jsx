import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exk7c48uf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exk7c48uf"/>`,
		"fallback": "noviair:clipboard-medical-x",
	});
}

export default Component;
