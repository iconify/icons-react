import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grdj55bza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="grdj55bza"/>`,
		"fallback": "reicon:camera-record",
	});
}

export default Component;
