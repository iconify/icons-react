import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eusk0o6ap.css';

const viewBox = {"width":667,"height":688};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eusk0o6ap"/>`,
		"fallback": "ls:eject",
	});
}

export default Component;
