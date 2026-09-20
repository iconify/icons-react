import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pgkakvbrl.css';
import '../../css/b/b1rrn1b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pgkakvbrl"/><path class="b1rrn1b0a"/></g>`,
		"fallback": "streamline-ultimate:blog-blogger-logo",
	});
}

export default Component;
