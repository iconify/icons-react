import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw6ppgbbn.css';
import '../../css/w/wf_7x7bqn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw6ppgbbn"/><path class="wf_7x7bqn"/>`,
		"fallback": "file-icons:config-typescript",
	});
}

export default Component;
