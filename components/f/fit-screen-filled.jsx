import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgtq1ud1j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pgtq1ud1j"/>`,
		"fallback": "lsicon:fit-screen-filled",
	});
}

export default Component;
