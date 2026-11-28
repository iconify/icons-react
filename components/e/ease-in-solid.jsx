import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwkyo7u3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwkyo7u3a"/>`,
		"fallback": "iconaut:ease-in-solid",
	});
}

export default Component;
