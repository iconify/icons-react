import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gds_2f.css';
import '../../css/s/so-from-86.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gds_2f"/>`,
		"fallback": "line-md:at",
	});
}

export default Component;
