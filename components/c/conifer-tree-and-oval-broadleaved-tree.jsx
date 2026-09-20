import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwyekn-8b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwyekn-8b"/>`,
		"fallback": "pinhead:conifer-tree-and-oval-broadleaved-tree",
	});
}

export default Component;
