import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpt8tsbli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpt8tsbli"/>`,
		"fallback": "keyline-icons:file",
	});
}

export default Component;
