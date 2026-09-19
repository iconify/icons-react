import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbpsy19-s.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbpsy19-s"/>`,
		"fallback": "ps:folder",
	});
}

export default Component;
