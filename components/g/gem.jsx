import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj75sccnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj75sccnv"/>`,
		"fallback": "noviair-light:gem",
	});
}

export default Component;
