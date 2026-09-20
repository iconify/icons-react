import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k_3ijcb6f.css';
import '../../css/o/orq08htca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k_3ijcb6f"/><path class="orq08htca"/></g>`,
		"fallback": "streamline-ultimate:chess-knight",
	});
}

export default Component;
