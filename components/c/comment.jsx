import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrdj_04qc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrdj_04qc"/>`,
		"fallback": "proicons:comment",
	});
}

export default Component;
