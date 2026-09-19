import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnlimkbst.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnlimkbst"/>`,
		"fallback": "f7:arrow-2-circlepath-circle-fill",
	});
}

export default Component;
