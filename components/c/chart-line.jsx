import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbbu5e-zd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbbu5e-zd"/>`,
		"fallback": "uil:chart-line",
	});
}

export default Component;
