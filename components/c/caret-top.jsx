import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3yq9f4rs.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3yq9f4rs"/>`,
		"fallback": "ep:caret-top",
	});
}

export default Component;
