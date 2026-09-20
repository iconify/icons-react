import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qujgu5bzh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qujgu5bzh"/>`,
		"fallback": "streamline-flex:airship-remix",
	});
}

export default Component;
