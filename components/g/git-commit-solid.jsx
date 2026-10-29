import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqh_f-kog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqh_f-kog"/>`,
		"fallback": "withicons:git-commit-solid",
	});
}

export default Component;
