import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctbrky6mb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ctbrky6mb"/>`,
		"fallback": "streamline-sharp:battery-medium-3-solid",
	});
}

export default Component;
