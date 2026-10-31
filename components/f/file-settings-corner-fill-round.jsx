import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjzk58bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjzk58bqv"/>`,
		"fallback": "coolicons:file-settings-corner-fill-round",
	});
}

export default Component;
