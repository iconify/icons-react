import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeq-rjbnu.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bu_5_sd4o.css';
import '../../css/j/jjy36xb2g.css';
import '../../css/i/i29sr3qkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary zeq-rjbnu"/><g class="dt0cm9dhy primary"><path class="bu_5_sd4o"/><path class="jjy36xb2g"/><path class="i29sr3qkr"/></g>`,
		"fallback": "iconaut:clipboard-heart-duo",
	});
}

export default Component;
