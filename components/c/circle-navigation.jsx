import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk1bn3bmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk1bn3bmh"/>`,
		"fallback": "keyline-icons:circle-navigation",
	});
}

export default Component;
