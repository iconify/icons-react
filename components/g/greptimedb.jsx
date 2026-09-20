import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zajy16b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zajy16b9r"/>`,
		"fallback": "thesvg:greptimedb",
	});
}

export default Component;
