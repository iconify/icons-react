import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkqy2hbla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xkqy2hbla"/>`,
		"fallback": "streamline-sharp:information-circle-solid",
	});
}

export default Component;
