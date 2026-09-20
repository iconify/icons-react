import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yaw8lrbot.css';
import '../../css/b/bq40tibwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="yaw8lrbot"/><path class="bq40tibwo"/></g>`,
		"fallback": "thesvg:fastgpt",
	});
}

export default Component;
