import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgm2whbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgm2whbip"/>`,
		"fallback": "tdesign:cloudy-sunny-filled",
	});
}

export default Component;
