import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfrn35b2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dfrn35b2f"/>`,
		"fallback": "basil:apps-outline",
	});
}

export default Component;
