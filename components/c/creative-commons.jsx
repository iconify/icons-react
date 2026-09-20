import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5dk1gb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5dk1gb2g"/>`,
		"fallback": "thesvg-color:creative-commons",
	});
}

export default Component;
