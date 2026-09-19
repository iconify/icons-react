import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alx12qbeu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alx12qbeu"/>`,
		"fallback": "dinkie-icons:bug",
	});
}

export default Component;
