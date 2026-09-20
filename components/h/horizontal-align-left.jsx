import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4z5ngy-x.css';
import '../../css/x/xqiru0m4e.css';
import '../../css/b/blbmi0irt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4z5ngy-x"/><path class="xqiru0m4e"/><path class="blbmi0irt"/>`,
		"fallback": "uim:horizontal-align-left",
	});
}

export default Component;
