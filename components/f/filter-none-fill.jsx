import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lix1ev9xm.css';
import '../../css/j/jjbqhzpum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lix1ev9xm"/><path class="jjbqhzpum"/>`,
		"fallback": "si:filter-none-fill",
	});
}

export default Component;
