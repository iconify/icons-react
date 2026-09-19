import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sjowjbelj.css';
import '../../css/i/i5cryzbhk.css';
import '../../css/g/g76q6noeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="sjowjbelj"/><path class="i5cryzbhk"/><path class="g76q6noeu"/></g>`,
		"fallback": "hugeicons:city-02",
	});
}

export default Component;
