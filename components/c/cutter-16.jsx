import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnxtu2a1f.css';
import '../../css/p/pt_8qebbk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnxtu2a1f"/><path clip-rule="evenodd" class="pt_8qebbk"/>`,
		"fallback": "qlementine-icons:cutter-16",
	});
}

export default Component;
