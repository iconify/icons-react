import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsdbv17zy.css';

const viewBox = {"width":1400.1,"height":452.4,"left":-0.03,"top":-0.03};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsdbv17zy"/>`,
		"fallback": "thesvg-color:harvard",
	});
}

export default Component;
