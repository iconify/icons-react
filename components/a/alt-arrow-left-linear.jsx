import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbtfr4qud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbtfr4qud"/>`,
		"fallback": "solar:alt-arrow-left-linear",
	});
}

export default Component;
