import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usgsh8fjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usgsh8fjs"/>`,
		"fallback": "reicon:arrows-rotate",
	});
}

export default Component;
