import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw3q3-91j.css';
import '../../css/z/zo8llxvbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw3q3-91j duoicon-secondary-layer"/><path class="duoicon-primary-layer zo8llxvbi"/>`,
		"fallback": "duo-icons:campground",
	});
}

export default Component;
