import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq3n7ab0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq3n7ab0o"/>`,
		"fallback": "pixel:hackernoon-purcat",
	});
}

export default Component;
