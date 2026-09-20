import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywfef-bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywfef-bqc"/>`,
		"fallback": "ri:file-word-2-fill",
	});
}

export default Component;
