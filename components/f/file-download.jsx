import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muo_u7brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muo_u7brz"/>`,
		"fallback": "ci:file-download",
	});
}

export default Component;
