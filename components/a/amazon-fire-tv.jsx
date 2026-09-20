import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcv3qbcsb.css';
import '../../css/z/zq4712bmn.css';

const viewBox = {"width":269.567,"height":153.532};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcv3qbcsb"/><path class="zq4712bmn"/>`,
		"fallback": "thesvg-color:amazon-fire-tv",
	});
}

export default Component;
