import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1xfxt6no.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1xfxt6no"/>`,
		"fallback": "dinkie-icons:arrows-maximize",
	});
}

export default Component;
