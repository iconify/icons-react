import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur8ru8b9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur8ru8b9g"/>`,
		"fallback": "thesvg:apache-nifi",
	});
}

export default Component;
