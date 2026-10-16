import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5fpfqrkj.css';
import '../../css/g/gg61wfd5d.css';
import '../../css/x/xb12bpbpj.css';
import '../../css/f/ft4db_bhs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5fpfqrkj"/><path class="gg61wfd5d"/><path class="xb12bpbpj"/><path class="ft4db_bhs"/>`,
		"fallback": "energy-icons:battery-eco-20",
	});
}

export default Component;
