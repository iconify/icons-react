import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9udybb1v.css';
import '../../css/g/gv79s0s8x.css';
import '../../css/w/wjzx4sbsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9udybb1v"/><path class="gv79s0s8x"/><path class="wjzx4sbsg"/>`,
		"fallback": "solar:chef-hat-heart-bold-duotone",
	});
}

export default Component;
