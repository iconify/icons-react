import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fqzvm8b7t.css';
import '../../css/o/obxn-_bpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="fqzvm8b7t"/><path class="obxn-_bpf"/></g>`,
		"fallback": "streamline-logos:douban-logo",
	});
}

export default Component;
