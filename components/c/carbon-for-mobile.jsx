import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7wssw66i.css';
import '../../css/t/ttkwngbky.css';
import '../../css/l/lhg-6wa8v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7wssw66i"/><circle class="ttkwngbky"/><path class="lhg-6wa8v"/>`,
		"fallback": "carbon:carbon-for-mobile",
	});
}

export default Component;
