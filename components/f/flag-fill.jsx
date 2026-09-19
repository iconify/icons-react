import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcgzgubwq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcgzgubwq"/>`,
		"fallback": "f7:flag-fill",
	});
}

export default Component;
