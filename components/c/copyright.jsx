import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-mth8bqt.css';
import '../../css/r/r7nu-ofod.css';
import '../../css/y/yk60_vm2p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="g-mth8bqt"><path class="r7nu-ofod"/><path class="yk60_vm2p"/></g>`,
		"fallback": "fluent-emoji-flat:copyright",
	});
}

export default Component;
