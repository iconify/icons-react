import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb78fs52v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb78fs52v"/>`,
		"fallback": "vadivam:forward",
	});
}

export default Component;
