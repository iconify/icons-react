import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwvbtus1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwvbtus1s"/>`,
		"fallback": "ri:alarm-add-fill",
	});
}

export default Component;
