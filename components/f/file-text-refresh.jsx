import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svm9p0buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svm9p0buj"/>`,
		"fallback": "noviair:file-text-refresh",
	});
}

export default Component;
