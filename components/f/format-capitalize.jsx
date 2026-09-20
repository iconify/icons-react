import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg9ccc5ez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="lg9ccc5ez"/>`,
		"fallback": "wordpress:format-capitalize",
	});
}

export default Component;
