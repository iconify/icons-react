import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/uulclgxys.css';
import '../../css/h/hjhtkgxdd.css';
import '../../css/g/gouhb4sbn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="uulclgxys"/><path class="hjhtkgxdd"/><path class="gouhb4sbn"/></g>`,
		"fallback": "streamline-plump-color:disable-heart",
	});
}

export default Component;
