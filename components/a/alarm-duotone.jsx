import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu0krdbdg.css';
import '../../css/g/gcnxx2xsc.css';
import '../../css/z/zopjch_2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hu0krdbdg"><path class="gcnxx2xsc"/><circle class="zopjch_2q"/></g>`,
		"fallback": "lets-icons:alarm-duotone",
	});
}

export default Component;
