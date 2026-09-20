import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c20pa821i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c20pa821i"/>`,
		"fallback": "streamline-sharp-color:gold-flat",
	});
}

export default Component;
