import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyf_obcvj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyf_obcvj"/>`,
		"fallback": "f7:exclamationmark",
	});
}

export default Component;
