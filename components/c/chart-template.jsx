import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r526yusrq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r526yusrq"/>`,
		"fallback": "fluent-mdl2:chart-template",
	});
}

export default Component;
