import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jflhvuo3s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jflhvuo3s"/>`,
		"fallback": "streamline-flex:bug-antivirus-shield-solid",
	});
}

export default Component;
