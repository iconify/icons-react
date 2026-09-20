import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vb8vieq9j.css';
import '../../css/k/kinx7jb3n.css';
import '../../css/v/vxa4ihb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vb8vieq9j"/><path class="kinx7jb3n"/><path class="vxa4ihb0i"/></g>`,
		"fallback": "reicon:document-upload",
	});
}

export default Component;
