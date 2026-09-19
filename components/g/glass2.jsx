import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eplhw_nba.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eplhw_nba"/>`,
		"fallback": "icomoon-free:glass2",
	});
}

export default Component;
