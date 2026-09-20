import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfv8tcc4i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sfv8tcc4i"/>`,
		"fallback": "streamline-flex:health-care-2-solid",
	});
}

export default Component;
