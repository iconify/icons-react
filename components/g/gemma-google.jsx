import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkvs36v4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkvs36v4p"/>`,
		"fallback": "thesvg-color:gemma-google",
	});
}

export default Component;
