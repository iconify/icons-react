import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuzx40mug.css';
import '../../css/w/wkccvue1w.css';
import '../../css/y/yur3l-b2x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuzx40mug"/><path class="wkccvue1w"/><path class="yur3l-b2x"/>`,
		"fallback": "selfhst:apache-tomcat",
	});
}

export default Component;
