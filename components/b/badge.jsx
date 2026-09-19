import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaj3ch19q.css';
import '../../css/l/lj_w3s1cd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaj3ch19q"/><path class="lj_w3s1cd"/>`,
		"fallback": "carbon:badge",
	});
}

export default Component;
