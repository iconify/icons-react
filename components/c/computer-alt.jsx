import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0s3xrbgm.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0s3xrbgm"/>`,
		"fallback": "jam:computer-alt",
	});
}

export default Component;
