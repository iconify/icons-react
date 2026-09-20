import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/empf6hb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="empf6hb5c"/>`,
		"fallback": "stash:clock-solid",
	});
}

export default Component;
