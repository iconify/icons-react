import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csyah5ukg.css';
import '../../css/o/ou22v7n3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csyah5ukg"/><path class="ou22v7n3a"/>`,
		"fallback": "eva:arrowhead-up-fill",
	});
}

export default Component;
