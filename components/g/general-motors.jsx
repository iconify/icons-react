import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt1xgbbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt1xgbbac"/>`,
		"fallback": "thesvg-color:general-motors",
	});
}

export default Component;
