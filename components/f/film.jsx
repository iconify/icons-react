import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvhljtbdd.css';
import '../../css/y/ykb_zpbhy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvhljtbdd"/><path class="ykb_zpbhy"/>`,
		"fallback": "ep:film",
	});
}

export default Component;
