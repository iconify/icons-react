import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr82dzbqk.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr82dzbqk"/>`,
		"fallback": "f7:film",
	});
}

export default Component;
