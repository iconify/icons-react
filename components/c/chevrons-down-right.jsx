import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b8m3d_byt.css';
import '../../css/t/t1h060dbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b8m3d_byt"/><path class="t1h060dbx"/></g>`,
		"fallback": "tabler:chevrons-down-right",
	});
}

export default Component;
