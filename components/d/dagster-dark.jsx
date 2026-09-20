import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_p-l7xft.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_p-l7xft"/>`,
		"fallback": "selfhst:dagster-dark",
	});
}

export default Component;
