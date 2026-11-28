import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhm3bqbpv.css';
import '../../css/r/rc5cwfboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary uhm3bqbpv"/><path class="primary rc5cwfboz"/>`,
		"fallback": "iconaut:github-duo",
	});
}

export default Component;
