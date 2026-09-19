import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf_-mlbng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf_-mlbng"/>`,
		"fallback": "boxicons:heading",
	});
}

export default Component;
