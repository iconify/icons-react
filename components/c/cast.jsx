import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oatqgi0zs.css';
import '../../css/c/c5-yaz5ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oatqgi0zs"/><path class="c5-yaz5ep"/>`,
		"fallback": "token:cast",
	});
}

export default Component;
