import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-0j_gbpc.css';
import '../../css/l/lxltxnh8y.css';
import '../../css/d/daur5ccoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-0j_gbpc"/><path clip-rule="evenodd" class="lxltxnh8y"/><path class="daur5ccoo"/>`,
		"fallback": "token:hawk",
	});
}

export default Component;
