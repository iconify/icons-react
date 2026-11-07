import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2-z8pdzu.css';
import '../../css/s/sn_zd46fb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u2-z8pdzu"/><path class="sn_zd46fb"/>`,
		"fallback": "solar:export-bold",
	});
}

export default Component;
