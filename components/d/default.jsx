import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2j61makx.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2j61makx"/>`,
		"fallback": "file-icons:default",
	});
}

export default Component;
