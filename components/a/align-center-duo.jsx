import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndxmdur2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndxmdur2o"/>`,
		"fallback": "iconaut:align-center-duo",
	});
}

export default Component;
