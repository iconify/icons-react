import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljsqm-boc.css';
import '../../css/d/dklea-b1y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljsqm-boc"/><path class="dklea-b1y"/>`,
		"fallback": "qlementine-icons:guitar-folk-16",
	});
}

export default Component;
