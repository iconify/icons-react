import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hggdfwbki.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hggdfwbki"/>`,
		"fallback": "streamline-flex:camera-setting-gear-remix",
	});
}

export default Component;
