import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rogd2jebs.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rogd2jebs"/>`,
		"fallback": "dinkie-icons:file-folder-filled",
	});
}

export default Component;
