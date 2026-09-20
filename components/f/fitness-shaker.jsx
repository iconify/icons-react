import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xjkpw7btk.css';
import '../../css/w/wdxawpb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xjkpw7btk"/><path class="wdxawpb6l"/></g>`,
		"fallback": "streamline-ultimate:fitness-shaker",
	});
}

export default Component;
