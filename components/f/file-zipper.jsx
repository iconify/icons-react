import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlwwq9bnt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlwwq9bnt"/>`,
		"fallback": "fa7-regular:file-zipper",
	});
}

export default Component;
