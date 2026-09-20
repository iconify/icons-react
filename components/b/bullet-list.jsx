import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui9se-bue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui9se-bue"/>`,
		"fallback": "streamline-sharp-color:bullet-list",
	});
}

export default Component;
