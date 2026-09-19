import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7bk3wbqk.css';
import '../../css/r/r7lg6bmas.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7bk3wbqk"/><path class="r7lg6bmas"/>`,
		"fallback": "ep:back",
	});
}

export default Component;
