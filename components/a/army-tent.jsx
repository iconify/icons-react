import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq43k1bqb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq43k1bqb"/>`,
		"fallback": "temaki:army-tent",
	});
}

export default Component;
