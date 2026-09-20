import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsfxo5bvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsfxo5bvc"/>`,
		"fallback": "thesvg-color:iheartradio",
	});
}

export default Component;
