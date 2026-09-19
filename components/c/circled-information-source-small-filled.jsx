import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trjcp9g_k.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trjcp9g_k"/>`,
		"fallback": "dinkie-icons:circled-information-source-small-filled",
	});
}

export default Component;
