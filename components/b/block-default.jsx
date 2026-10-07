import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn69_sn7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn69_sn7n"/>`,
		"fallback": "wordpress:block-default",
	});
}

export default Component;
