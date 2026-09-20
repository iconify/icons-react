import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgsy6rdfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgsy6rdfj"/>`,
		"fallback": "pixel:download",
	});
}

export default Component;
