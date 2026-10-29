import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n4hfolbfa.css';
import '../../css/o/o5ywef7nt.css';
import '../../css/t/te682eb5s.css';
import '../../css/g/g9owp9b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="n4hfolbfa"/><path class="o5ywef7nt wm-a"/><path class="te682eb5s"/><path class="g9owp9b4k wm-a"/></g>`,
		"fallback": "withicons:chef-hat-duo",
	});
}

export default Component;
