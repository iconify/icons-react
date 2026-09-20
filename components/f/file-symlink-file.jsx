import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-zvam3xw.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-zvam3xw"/>`,
		"fallback": "octicon:file-symlink-file",
	});
}

export default Component;
