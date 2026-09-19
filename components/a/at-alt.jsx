import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9vteebyd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9vteebyd"/>`,
		"fallback": "f7:at-alt",
	});
}

export default Component;
