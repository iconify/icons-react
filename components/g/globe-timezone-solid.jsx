import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yptv8empz.css';
import '../../css/e/e7ebmvq0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yptv8empz"/><path class="e7ebmvq0f"/>`,
		"fallback": "stash:globe-timezone-solid",
	});
}

export default Component;
