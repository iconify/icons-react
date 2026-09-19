import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6hyipvux.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6hyipvux"/>`,
		"fallback": "fluent-mdl2:caret-bottom-left-center-8",
	});
}

export default Component;
