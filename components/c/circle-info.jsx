import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoa0fbuwz.css';
import '../../css/o/o7khdv3bk.css';
import '../../css/h/hr3wh0b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoa0fbuwz"/><circle class="o7khdv3bk"/><path class="hr3wh0b3g"/>`,
		"fallback": "circum:circle-info",
	});
}

export default Component;
