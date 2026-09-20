import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrmpk-mlb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rrmpk-mlb"/>`,
		"fallback": "reicon:home-wifi2-filled",
	});
}

export default Component;
