import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0nmk3bpw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0nmk3bpw"/>`,
		"fallback": "f7:backward-fill",
	});
}

export default Component;
