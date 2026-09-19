import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3dqtccwx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3dqtccwx"/>`,
		"fallback": "charm:code",
	});
}

export default Component;
