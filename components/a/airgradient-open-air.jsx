import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f82k84b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f82k84b8p"/>`,
		"fallback": "cbi:airgradient-open-air",
	});
}

export default Component;
