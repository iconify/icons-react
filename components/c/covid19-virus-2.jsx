import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/th0y6sblu.css';
import '../../css/l/lidv3ugmq.css';
import '../../css/h/h160k9b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="th0y6sblu"/><path class="lidv3ugmq"/><path class="h160k9b-f"/></g>`,
		"fallback": "covid:covid19-virus-2",
	});
}

export default Component;
