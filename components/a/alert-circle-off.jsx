import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft-5lzbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft-5lzbdb"/>`,
		"fallback": "tabler:alert-circle-off",
	});
}

export default Component;
