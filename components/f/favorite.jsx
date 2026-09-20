import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhyv_gnrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhyv_gnrk"/>`,
		"fallback": "uit:favorite",
	});
}

export default Component;
