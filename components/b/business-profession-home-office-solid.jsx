import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkzageb0d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tkzageb0d"/>`,
		"fallback": "streamline:business-profession-home-office-solid",
	});
}

export default Component;
