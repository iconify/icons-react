import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2l-sc8wc.css';
import '../../css/h/hrlvobb8v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2l-sc8wc"/><path class="hrlvobb8v"/>`,
		"fallback": "ant-design:box-plot-twotone",
	});
}

export default Component;
