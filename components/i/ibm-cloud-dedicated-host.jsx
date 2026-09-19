import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k43y_he5a.css';
import '../../css/q/qwvywhgtu.css';
import '../../css/v/vh1dgbcue.css';
import '../../css/y/yca0t4ank.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="k43y_he5a"/><path class="qwvywhgtu"/><circle class="vh1dgbcue"/><path class="yca0t4ank"/>`,
		"fallback": "carbon:ibm-cloud-dedicated-host",
	});
}

export default Component;
