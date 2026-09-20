import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmyb5bbhg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zmyb5bbhg"/>`,
		"fallback": "streamline:controller-1-remix",
	});
}

export default Component;
