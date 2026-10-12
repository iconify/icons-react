import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwzn8jb7l.css';
import '../../css/x/xhaqngbdr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwzn8jb7l"/><path class="xhaqngbdr"/>`,
		"fallback": "energy-icons:bandage-20",
	});
}

export default Component;
