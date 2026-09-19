import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvg_1-o8n.css';
import '../../css/g/gqj_zqq9u.css';
import '../../css/j/jw_3-cczy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="uvg_1-o8n"/><rect class="gqj_zqq9u"/><path class="jw_3-cczy"/>`,
		"fallback": "boxicons:align-horizontal-justify-start-filled",
	});
}

export default Component;
