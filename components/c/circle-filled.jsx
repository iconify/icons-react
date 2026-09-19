import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5-j6_bca.css';
import '../../css/s/svdy80z7e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="d5-j6_bca"/><path class="svdy80z7e"/>`,
		"fallback": "carbon:circle-filled",
	});
}

export default Component;
