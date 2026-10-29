import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3sn4wb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3sn4wb5z"/>`,
		"fallback": "withicons:ban-solid",
	});
}

export default Component;
