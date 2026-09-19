import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb5zndzyy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb5zndzyy"/>`,
		"fallback": "bi:file-word-fill",
	});
}

export default Component;
