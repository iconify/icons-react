import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld8w7hb7k.css';
import '../../css/h/hp_ny3_4l.css';
import '../../css/c/cqnbl8q7o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ld8w7hb7k"/><rect class="hp_ny3_4l"/><path class="cqnbl8q7o"/>`,
		"fallback": "ion:battery-full",
	});
}

export default Component;
