import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjxlhlb8t.css';
import '../../css/s/sv5erwbch.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjxlhlb8t"/><path class="sv5erwbch"/>`,
		"fallback": "streamline-pixel:content-files-archive-books-1",
	});
}

export default Component;
