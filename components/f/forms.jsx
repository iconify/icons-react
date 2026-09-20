import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7v64dbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7v64dbbo"/>`,
		"fallback": "tabler:forms",
	});
}

export default Component;
