import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptysfhbch.css';
import '../../css/g/ge6al85qt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptysfhbch"/><path class="ge6al85qt"/>`,
		"fallback": "energy-icons:euro-20-bold",
	});
}

export default Component;
