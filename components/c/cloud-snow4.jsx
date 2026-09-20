import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c0zurtb8s.css';
import '../../css/x/xcsnffbos.css';
import '../../css/w/w5rs4odyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c0zurtb8s"/><path class="xcsnffbos"/><path class="w5rs4odyy"/></g>`,
		"fallback": "reicon:cloud-snow4",
	});
}

export default Component;
