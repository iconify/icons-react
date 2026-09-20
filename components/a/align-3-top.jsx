import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lx6hsacbq.css';
import '../../css/g/g84z24b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="lx6hsacbq"/><rect class="g84z24b3u"/></g>`,
		"fallback": "reicon:align-3-top",
	});
}

export default Component;
