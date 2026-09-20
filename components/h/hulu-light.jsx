import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trlfrfbaa.css';

const viewBox = {"width":243.5,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="trlfrfbaa"/>`,
		"fallback": "thesvg-color:hulu-light",
	});
}

export default Component;
