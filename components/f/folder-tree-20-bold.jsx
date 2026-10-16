import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b24n32b6u.css';
import '../../css/j/jdj652_du.css';
import '../../css/m/m-d02bb8g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b24n32b6u"/><path class="jdj652_du"/><path class="m-d02bb8g"/>`,
		"fallback": "energy-icons:folder-tree-20-bold",
	});
}

export default Component;
