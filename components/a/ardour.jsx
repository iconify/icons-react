import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa0jrpw7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa0jrpw7u"/>`,
		"fallback": "thesvg-color:ardour",
	});
}

export default Component;
