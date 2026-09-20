import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqi4lmbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqi4lmbxc"/>`,
		"fallback": "thesvg-color:deepmind-google",
	});
}

export default Component;
