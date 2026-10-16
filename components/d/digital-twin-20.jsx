import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzob-qw6y.css';
import '../../css/z/zqtn4_s2w.css';
import '../../css/z/zga6su7rv.css';
import '../../css/v/vgcdb3bfr.css';
import '../../css/i/i59ff005j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzob-qw6y"/><path class="zqtn4_s2w"/><path class="zga6su7rv"/><path class="vgcdb3bfr"/><path class="i59ff005j"/>`,
		"fallback": "energy-icons:digital-twin-20",
	});
}

export default Component;
