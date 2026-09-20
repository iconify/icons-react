import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba5ymebjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba5ymebjo"/>`,
		"fallback": "thesvg-color:google-cloud-composer",
	});
}

export default Component;
