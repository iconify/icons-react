import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2v4d7bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l2v4d7bql"/>`,
		"fallback": "streamline-sharp:chef-toque-hat-solid",
	});
}

export default Component;
