import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-2s-5brl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-2s-5brl"/>`,
		"fallback": "vadivam:banknote-x",
	});
}

export default Component;
