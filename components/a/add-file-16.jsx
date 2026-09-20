import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwhvqne3w.css';
import '../../css/j/jheuc51zq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mwhvqne3w"/><path class="jheuc51zq"/>`,
		"fallback": "qlementine-icons:add-file-16",
	});
}

export default Component;
