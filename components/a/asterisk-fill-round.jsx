import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y44_4jbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y44_4jbde"/>`,
		"fallback": "coolicons:asterisk-fill-round",
	});
}

export default Component;
