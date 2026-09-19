import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/taopki_li.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="taopki_li"/>`,
		"fallback": "guidance:clock",
	});
}

export default Component;
