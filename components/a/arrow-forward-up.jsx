import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kykpw0ngx.css';
import '../../css/y/ydrr9492q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kykpw0ngx"/><path class="ydrr9492q"/></g>`,
		"fallback": "tabler:arrow-forward-up",
	});
}

export default Component;
