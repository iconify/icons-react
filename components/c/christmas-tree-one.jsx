import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bao1vbqnc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bao1vbqnc"/>`,
		"fallback": "icon-park-outline:christmas-tree-one",
	});
}

export default Component;
