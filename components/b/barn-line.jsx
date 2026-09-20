import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsfik-bys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsfik-bys"/>`,
		"fallback": "si:barn-line",
	});
}

export default Component;
