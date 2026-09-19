import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze6oqhkxq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze6oqhkxq"/>`,
		"fallback": "entypo:arrow-bold-left",
	});
}

export default Component;
