import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k7ky6prup.css';
import '../../css/z/zjsg5fbvy.css';
import '../../css/e/etjyq4qct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k7ky6prup"/><path class="zjsg5fbvy"/><path class="etjyq4qct"/></g>`,
		"fallback": "reicon:edit",
	});
}

export default Component;
