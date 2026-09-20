import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtp0xqp4x.css';
import '../../css/j/j3n2vbcov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtp0xqp4x"/><path class="j3n2vbcov"/>`,
		"fallback": "uim:check-circle",
	});
}

export default Component;
