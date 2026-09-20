import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b15xjgb5x.css';
import '../../css/c/c50_lwbrj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b15xjgb5x"/><path class="c50_lwbrj"/>`,
		"fallback": "oui:anomaly-detection",
	});
}

export default Component;
