import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au9804-ug.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="au9804-ug"/>`,
		"fallback": "streamline-color:earpods-flat",
	});
}

export default Component;
