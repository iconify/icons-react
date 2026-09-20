import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syfg72d3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syfg72d3j"/>`,
		"fallback": "simple-icons:ajv",
	});
}

export default Component;
