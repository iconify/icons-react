import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fmlnzirud.css';
import '../../css/f/fh5p1wbcf.css';
import '../../css/w/wjl0m-b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fmlnzirud"/><path class="fh5p1wbcf"/><path class="wjl0m-b2p"/></g>`,
		"fallback": "iconoir:3d-ellipse",
	});
}

export default Component;
