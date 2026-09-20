import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu247bctc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu247bctc"/>`,
		"fallback": "reicon:grid6",
	});
}

export default Component;
