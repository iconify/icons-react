import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af3qo4aum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af3qo4aum"/>`,
		"fallback": "noviair-light:file-zip",
	});
}

export default Component;
