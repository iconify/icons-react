import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnwxchu1n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mnwxchu1n"/>`,
		"fallback": "streamline:diamond-2-solid",
	});
}

export default Component;
