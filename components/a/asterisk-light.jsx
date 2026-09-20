import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipu4fx39x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipu4fx39x"/>`,
		"fallback": "stash:asterisk-light",
	});
}

export default Component;
