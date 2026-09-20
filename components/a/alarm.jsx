import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/cf5v9bjlj.css';
import '../../css/a/a8q6l_4zh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="cf5v9bjlj"/><path class="a8q6l_4zh"/></g>`,
		"fallback": "streamline-cyber:alarm",
	});
}

export default Component;
