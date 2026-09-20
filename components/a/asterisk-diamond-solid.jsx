import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bof_92yus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bof_92yus"/>`,
		"fallback": "mynaui:asterisk-diamond-solid",
	});
}

export default Component;
