import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrkng4bzm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrkng4bzm"/>`,
		"fallback": "fa7-solid:folder-minus",
	});
}

export default Component;
