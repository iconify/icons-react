import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idfr6hb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idfr6hb-a"/>`,
		"fallback": "thesvg-color:grok-xai",
	});
}

export default Component;
