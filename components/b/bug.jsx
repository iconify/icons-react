import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwm3u_bwl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwm3u_bwl"/>`,
		"fallback": "bi:bug",
	});
}

export default Component;
