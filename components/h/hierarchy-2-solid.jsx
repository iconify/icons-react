import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g75_2quas.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g75_2quas"/>`,
		"fallback": "streamline-flex:hierarchy-2-solid",
	});
}

export default Component;
