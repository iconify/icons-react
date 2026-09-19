import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfth-yblq.css';
import '../../css/y/yzsp5cclf.css';
import '../../css/u/u6upu__6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfth-yblq"/><path class="yzsp5cclf"/><path class="u6upu__6m"/>`,
		"fallback": "gcp:datapol",
	});
}

export default Component;
