import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lx6hsacbq.css';
import '../../css/a/ax7puse6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="lx6hsacbq"/><rect class="ax7puse6r"/></g>`,
		"fallback": "reicon:align-3-bottom",
	});
}

export default Component;
