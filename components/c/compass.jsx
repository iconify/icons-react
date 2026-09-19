import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hloo9kbrj.css';
import '../../css/q/qsngmeh5p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hloo9kbrj"/><path class="qsngmeh5p"/>`,
		"fallback": "cil:compass",
	});
}

export default Component;
