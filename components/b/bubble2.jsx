import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-sh_5dhw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-sh_5dhw"/>`,
		"fallback": "icomoon-free:bubble2",
	});
}

export default Component;
