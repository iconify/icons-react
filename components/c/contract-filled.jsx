import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z00-s6bfd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z00-s6bfd"/>`,
		"fallback": "lsicon:contract-filled",
	});
}

export default Component;
