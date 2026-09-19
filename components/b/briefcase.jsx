import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kv_aefxvm.css';
import '../../css/n/now86q9wq.css';
import '../../css/d/dz18vobqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="kv_aefxvm"/><path class="now86q9wq"/><path class="dz18vobqh"/></g>`,
		"fallback": "iconamoon:briefcase",
	});
}

export default Component;
