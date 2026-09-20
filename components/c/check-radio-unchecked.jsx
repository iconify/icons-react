import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3ym1vb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t3ym1vb4o"/>`,
		"fallback": "nrk:check-radio-unchecked",
	});
}

export default Component;
