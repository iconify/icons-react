import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znwx6fbmp.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znwx6fbmp"/>`,
		"fallback": "dinkie-icons:floppy-disk-small-filled",
	});
}

export default Component;
