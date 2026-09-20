import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2u47pbtq.css';
import '../../css/p/pdguunnht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f2u47pbtq"/><path class="pdguunnht"/>`,
		"fallback": "stash:data-boolean-light",
	});
}

export default Component;
