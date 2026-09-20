import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmf4h2brv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pmf4h2brv"/>`,
		"fallback": "streamline:business-card-solid",
	});
}

export default Component;
