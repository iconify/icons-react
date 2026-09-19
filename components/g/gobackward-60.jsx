import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puw4q2wjg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puw4q2wjg"/>`,
		"fallback": "f7:gobackward-60",
	});
}

export default Component;
