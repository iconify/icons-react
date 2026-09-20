import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs7-zybgo.css';
import '../../css/h/hwwfh42ne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs7-zybgo"/><path class="hwwfh42ne"/>`,
		"fallback": "token:elastos",
	});
}

export default Component;
