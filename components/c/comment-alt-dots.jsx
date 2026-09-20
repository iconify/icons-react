import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edegqlkpr.css';
import '../../css/a/a1ldf12-h.css';
import '../../css/q/qod0rfb7x.css';
import '../../css/m/ml61terwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edegqlkpr"/><circle class="a1ldf12-h"/><circle class="qod0rfb7x"/><circle class="ml61terwk"/>`,
		"fallback": "uim:comment-alt-dots",
	});
}

export default Component;
