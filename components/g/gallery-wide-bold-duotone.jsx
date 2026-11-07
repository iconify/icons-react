import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf2z5ab9j.css';
import '../../css/i/iubpiibgw.css';
import '../../css/c/cnfam5b5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf2z5ab9j"/><path clip-rule="evenodd" class="iubpiibgw"/><path class="cnfam5b5i"/>`,
		"fallback": "solar:gallery-wide-bold-duotone",
	});
}

export default Component;
