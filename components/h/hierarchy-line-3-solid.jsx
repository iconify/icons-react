import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udjd-0bxg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="udjd-0bxg"/>`,
		"fallback": "streamline-flex:hierarchy-line-3-solid",
	});
}

export default Component;
