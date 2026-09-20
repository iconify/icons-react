import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoj4kmq1v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoj4kmq1v"/>`,
		"fallback": "streamline-pixel:content-files-note-book",
	});
}

export default Component;
