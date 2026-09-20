import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aluz32qjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aluz32qjn"/>`,
		"fallback": "tabler:circle-dashed-letter-u",
	});
}

export default Component;
