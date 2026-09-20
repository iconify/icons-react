import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b-de8abbo.css';
import '../../css/t/ti6hml45y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b-de8abbo"/><ellipse class="ti6hml45y"/></g>`,
		"fallback": "lucide:cone",
	});
}

export default Component;
