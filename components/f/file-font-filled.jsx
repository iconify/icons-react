import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9-u7do2o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9-u7do2o"/>`,
		"fallback": "dinkie-icons:file-font-filled",
	});
}

export default Component;
