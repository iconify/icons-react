import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st95u1bne.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st95u1bne"/>`,
		"fallback": "gis:cadastre-map",
	});
}

export default Component;
