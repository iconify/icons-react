import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm-rn_6_g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm-rn_6_g"/>`,
		"fallback": "icomoon-free:bug",
	});
}

export default Component;
