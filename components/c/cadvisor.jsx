import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwsm7kfyt.css';
import '../../css/x/xm99lzboj.css';
import '../../css/j/ja64cnb2a.css';
import '../../css/n/nf8s6zbdh.css';
import '../../css/i/i53b1ojoa.css';
import '../../css/x/xm6uyxb2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwsm7kfyt"/><path class="xm99lzboj"/><path class="ja64cnb2a"/><path class="nf8s6zbdh"/><path class="i53b1ojoa"/><path class="xm6uyxb2o"/>`,
		"fallback": "selfhst:cadvisor",
	});
}

export default Component;
