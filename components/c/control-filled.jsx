import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umprgqz0j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="umprgqz0j"/>`,
		"fallback": "lsicon:control-filled",
	});
}

export default Component;
