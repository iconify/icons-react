import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qisnddmbb.css';
import '../../css/i/i5r18_m4w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qisnddmbb"/><path class="i5r18_m4w"/>`,
		"fallback": "energy-icons:hard-hat-48",
	});
}

export default Component;
