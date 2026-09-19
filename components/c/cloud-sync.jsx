import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3bu2f_4i.css';
import '../../css/k/kl4oqnb3v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3bu2f_4i"/><path class="kl4oqnb3v"/>`,
		"fallback": "ant-design:cloud-sync",
	});
}

export default Component;
