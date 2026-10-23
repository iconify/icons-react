import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nry19sbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nry19sbtt"/>`,
		"fallback": "vadivam:blocks",
	});
}

export default Component;
