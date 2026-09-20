import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngxw7g87j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngxw7g87j"/>`,
		"fallback": "vadivam:arrow-down-a-z",
	});
}

export default Component;
