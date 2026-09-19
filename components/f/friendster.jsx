import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svn71h5bl.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svn71h5bl"/>`,
		"fallback": "ps:friendster",
	});
}

export default Component;
