import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhso8hlxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhso8hlxf"/>`,
		"fallback": "griddy-icons:chicken-leg-filled",
	});
}

export default Component;
