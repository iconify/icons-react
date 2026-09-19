import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g6o7mxbbp.css';
import '../../css/t/tlm8zbz-n.css';
import '../../css/l/ldn1gl3gg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g6o7mxbbp"/><path class="tlm8zbz-n"/><path class="ldn1gl3gg"/></g>`,
		"fallback": "hugeicons:dices",
	});
}

export default Component;
