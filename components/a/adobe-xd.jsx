import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/atpp3jl6f.css';
import '../../css/a/aans355zk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="atpp3jl6f"/><path class="aans355zk"/></g>`,
		"fallback": "iconoir:adobe-xd",
	});
}

export default Component;
