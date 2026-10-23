import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs8r0wbua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs8r0wbua"/>`,
		"fallback": "vadivam:delete",
	});
}

export default Component;
