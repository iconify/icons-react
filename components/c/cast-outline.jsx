import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkpcifelj.css';
import '../../css/r/rzxh51_9l.css';
import '../../css/y/yqx0fwoad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkpcifelj"/><path class="rzxh51_9l"/><circle class="yqx0fwoad"/>`,
		"fallback": "eva:cast-outline",
	});
}

export default Component;
