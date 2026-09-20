import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlfmv5tdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlfmv5tdm"/>`,
		"fallback": "simple-icons:containerd",
	});
}

export default Component;
