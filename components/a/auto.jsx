import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg9c4xx5n.css';
import '../../css/y/y_xndqb9y.css';
import '../../css/w/wtbpydbzy.css';
import '../../css/q/qf8a_6bcc.css';
import '../../css/w/wc7xnpb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg9c4xx5n"/><path class="y_xndqb9y"/><path class="wtbpydbzy"/><path class="qf8a_6bcc"/><path class="wc7xnpb5c"/>`,
		"fallback": "material-icon-theme:auto",
	});
}

export default Component;
