import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk5j4gb-p.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk5j4gb-p"/>`,
		"fallback": "dinkie-icons:circled-information-source-filled",
	});
}

export default Component;
