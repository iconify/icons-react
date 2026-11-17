import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/h_-eqwb7k.css';
import '../../css/u/u3pid77re.css';
import '../../css/a/af9umnbdl.css';
import '../../css/h/hzp8rhu1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="h_-eqwb7k"/><path class="u3pid77re"/><path class="af9umnbdl"/><path class="hzp8rhu1b"/></g>`,
		"fallback": "matita:copy-plus",
	});
}

export default Component;
