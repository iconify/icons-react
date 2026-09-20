import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygc77k-_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygc77k-_n"/>`,
		"fallback": "uil:brackets-curly",
	});
}

export default Component;
