import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kwy8_4bvo.css';
import '../../css/a/aa0cau6br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kwy8_4bvo"/><path class="aa0cau6br"/></g>`,
		"fallback": "streamline-ultimate:certified-diploma",
	});
}

export default Component;
