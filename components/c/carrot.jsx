import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlii6advc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlii6advc"/>`,
		"fallback": "noviair-light:carrot",
	});
}

export default Component;
