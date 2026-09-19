import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf6coj27j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf6coj27j"/>`,
		"fallback": "cryptocurrency:dgb",
	});
}

export default Component;
