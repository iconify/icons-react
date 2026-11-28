import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ywnrbabvf.css';
import '../../css/v/vo850sb1q.css';
import '../../css/j/jkc4krewx.css';
import '../../css/a/a-ao8fb7m.css';
import '../../css/w/w50ok0ljq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ywnrbabvf"/><path class="vo850sb1q"/><path class="jkc4krewx"/><path class="a-ao8fb7m"/><path class="w50ok0ljq"/></g>`,
		"fallback": "iconaut:expand-horizontal",
	});
}

export default Component;
