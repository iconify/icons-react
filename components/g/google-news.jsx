import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo5ov6bja.css';
import '../../css/w/wbz7ahcns.css';
import '../../css/l/lxerqacem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo5ov6bja"/><path class="wbz7ahcns"/><path class="lxerqacem"/>`,
		"fallback": "pixel:google-news",
	});
}

export default Component;
