import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orf62jb8d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orf62jb8d"/>`,
		"fallback": "icomoon-free:bin",
	});
}

export default Component;
