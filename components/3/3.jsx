import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx5403b3l.css';

const viewBox = {"width":455,"height":772};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx5403b3l"/>`,
		"fallback": "ls:3",
	});
}

export default Component;
