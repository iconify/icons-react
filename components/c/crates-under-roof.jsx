import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcuwd4bmd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcuwd4bmd"/>`,
		"fallback": "pinhead:crates-under-roof",
	});
}

export default Component;
