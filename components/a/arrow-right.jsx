import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd5r6kjzg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd5r6kjzg"/>`,
		"fallback": "icomoon-free:arrow-right",
	});
}

export default Component;
