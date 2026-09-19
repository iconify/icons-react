import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3zir7nhw.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3zir7nhw"/>`,
		"fallback": "whh:braillespace",
	});
}

export default Component;
