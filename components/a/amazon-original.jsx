import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlxyymbyb.css';
import '../../css/w/wgvkkuyqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlxyymbyb"/><path class="wgvkkuyqy"/>`,
		"fallback": "lineicons:amazon-original",
	});
}

export default Component;
