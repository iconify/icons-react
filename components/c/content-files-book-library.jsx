import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7quqgbjv.css';
import '../../css/s/s1tnk0x5i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7quqgbjv"/><path class="s1tnk0x5i"/>`,
		"fallback": "streamline-pixel:content-files-book-library",
	});
}

export default Component;
