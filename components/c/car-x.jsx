import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3729jbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3729jbpa"/>`,
		"fallback": "noviair:car-x",
	});
}

export default Component;
