import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/md4gg0b9v.css';
import '../../css/y/ydhobwxud.css';
import '../../css/l/lmazhrbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="md4gg0b9v"/><path class="ydhobwxud"/><path class="lmazhrbcv"/></g>`,
		"fallback": "reicon:chrome",
	});
}

export default Component;
