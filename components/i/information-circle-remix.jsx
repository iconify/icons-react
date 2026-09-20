import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcyxmgb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wcyxmgb1w"/>`,
		"fallback": "streamline-sharp:information-circle-remix",
	});
}

export default Component;
