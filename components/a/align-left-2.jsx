import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1tt42brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1tt42brv"/>`,
		"fallback": "tabler:align-left-2",
	});
}

export default Component;
