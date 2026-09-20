import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/fjtgj3buw.css';
import '../../css/z/zff2_4bao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="fjtgj3buw"/><path class="zff2_4bao"/></g>`,
		"fallback": "streamline-cyber:bluetooth-searching",
	});
}

export default Component;
