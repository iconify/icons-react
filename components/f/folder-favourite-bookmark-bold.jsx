import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy7r9nb-t.css';
import '../../css/g/gfq35jb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy7r9nb-t"/><path class="gfq35jb6f"/>`,
		"fallback": "solar:folder-favourite-bookmark-bold",
	});
}

export default Component;
