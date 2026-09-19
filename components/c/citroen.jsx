import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh-g3b15f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh-g3b15f"/>`,
		"fallback": "cbi:citroen",
	});
}

export default Component;
