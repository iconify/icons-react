import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1jnopb3d.css';
import '../../css/l/l3z28ebpv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1jnopb3d"/><path class="l3z28ebpv"/>`,
		"fallback": "ant-design:bug-outlined",
	});
}

export default Component;
