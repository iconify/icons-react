import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk39v1bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zk39v1bym"/>`,
		"fallback": "iconoir:adobe-after-effects-solid",
	});
}

export default Component;
