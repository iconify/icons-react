import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkvpl8bch.css';
import '../../css/j/j6h96-z2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkvpl8bch"/><path class="j6h96-z2f"/>`,
		"fallback": "octicon:chat-add-24",
	});
}

export default Component;
