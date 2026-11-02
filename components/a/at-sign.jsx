import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/louyuugcp.css';
import '../../css/m/mnj9wxbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="louyuugcp"/><path class="mnj9wxbwy"/></g>`,
		"fallback": "matita:at-sign",
	});
}

export default Component;
