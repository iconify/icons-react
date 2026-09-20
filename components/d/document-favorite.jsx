import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kinx7jb3n.css';
import '../../css/q/q95-p3iye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kinx7jb3n"/><path class="q95-p3iye"/></g>`,
		"fallback": "reicon:document-favorite",
	});
}

export default Component;
