import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw74_bujk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw74_bujk"/>`,
		"fallback": "entypo:aircraft",
	});
}

export default Component;
