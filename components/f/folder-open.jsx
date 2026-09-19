import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd8yle12b.css';

const viewBox = {"width":1888,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd8yle12b"/>`,
		"fallback": "fa:folder-open",
	});
}

export default Component;
