import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viskcjbkm.css';
import '../../css/f/f8s_4jbup.css';
import '../../css/o/o8qnxtb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viskcjbkm"/><path class="f8s_4jbup"/><path class="o8qnxtb6v"/>`,
		"fallback": "token:cov",
	});
}

export default Component;
