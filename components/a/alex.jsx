import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya5ldybze.css';

const viewBox = {"width":264,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya5ldybze"/>`,
		"fallback": "file-icons:alex",
	});
}

export default Component;
