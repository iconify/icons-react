import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s-kyedw0o.css';
import '../../css/g/giwsujbel.css';
import '../../css/x/xy2w34n6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s-kyedw0o"/><path class="giwsujbel"/><path class="xy2w34n6q"/></g>`,
		"fallback": "reicon:document-like",
	});
}

export default Component;
