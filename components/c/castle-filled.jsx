import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi0s3acun.css';
import '../../css/w/w_ul5gqcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi0s3acun"/><path class="w_ul5gqcd"/>`,
		"fallback": "tdesign:castle-filled",
	});
}

export default Component;
