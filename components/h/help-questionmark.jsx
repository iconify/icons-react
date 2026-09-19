import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxv55ebri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxv55ebri"/>`,
		"fallback": "ci:help-questionmark",
	});
}

export default Component;
