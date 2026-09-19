import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vobjp9-9u.css';
import '../../css/v/vgc92oekq.css';
import '../../css/f/fvq226bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vobjp9-9u"/><path class="vgc92oekq"/><path class="fvq226bxy"/>`,
		"fallback": "cbi:cabridge-audio",
	});
}

export default Component;
