import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eaa3j5mot.css';
import '../../css/q/qv49kzbao.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eaa3j5mot"/><path class="qv49kzbao"/>`,
		"fallback": "gis:finish",
	});
}

export default Component;
