import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvw48nbhb.css';
import '../../css/o/owqh_f_dn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvw48nbhb"/><path class="owqh_f_dn"/>`,
		"fallback": "qlementine-icons:cloud-up-down-16",
	});
}

export default Component;
