import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huvje1kqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huvje1kqu"/>`,
		"fallback": "ci:heading-h1",
	});
}

export default Component;
