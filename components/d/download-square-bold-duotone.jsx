import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/h/hzm8jmb9u.css';
import '../../css/r/ri3hhtboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="hzm8jmb9u"/><path class="ri3hhtboo"/>`,
		"fallback": "solar:download-square-bold-duotone",
	});
}

export default Component;
