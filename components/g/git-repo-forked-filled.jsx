import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrakngbew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrakngbew"/>`,
		"fallback": "boxicons:git-repo-forked-filled",
	});
}

export default Component;
