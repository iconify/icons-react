import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvlm1bbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvlm1bbtv"/>`,
		"fallback": "mynaui:euro-octagon-solid",
	});
}

export default Component;
