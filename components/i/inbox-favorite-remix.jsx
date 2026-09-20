import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec4zljb5x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ec4zljb5x"/>`,
		"fallback": "streamline-flex:inbox-favorite-remix",
	});
}

export default Component;
