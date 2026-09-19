import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x581_5b2y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x581_5b2y"/>`,
		"fallback": "icomoon-free:file-text",
	});
}

export default Component;
