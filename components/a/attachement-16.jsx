import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf1-a4a-p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf1-a4a-p"/>`,
		"fallback": "qlementine-icons:attachement-16",
	});
}

export default Component;
