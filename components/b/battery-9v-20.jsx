import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vukmlib7r.css';
import '../../css/e/e31pe1ygs.css';
import '../../css/q/qw45uljby.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vukmlib7r"/><path class="e31pe1ygs"/><path class="qw45uljby"/>`,
		"fallback": "energy-icons:battery-9v-20",
	});
}

export default Component;
