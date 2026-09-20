import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrclfebok.css';
import '../../css/j/jheuc51zq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wrclfebok"/><path class="jheuc51zq"/>`,
		"fallback": "qlementine-icons:add-folder-16",
	});
}

export default Component;
