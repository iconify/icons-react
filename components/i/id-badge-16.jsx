import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbh-40nht.css';
import '../../css/j/jze6f0ytj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbh-40nht"/><path class="jze6f0ytj"/>`,
		"fallback": "octicon:id-badge-16",
	});
}

export default Component;
