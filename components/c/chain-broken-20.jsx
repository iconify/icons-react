import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd_z49b8i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd_z49b8i"/>`,
		"fallback": "garden:chain-broken-20",
	});
}

export default Component;
