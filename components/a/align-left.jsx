import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0o5wjnji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="h0o5wjnji"/>`,
		"fallback": "wordpress:align-left",
	});
}

export default Component;
