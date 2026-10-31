import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5eud-qii.css';
import '../../css/o/o3vojhb_l.css';
import '../../css/l/lkn0kjb2g.css';
import '../../css/w/w1bzx4bce.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5eud-qii"/><path class="o3vojhb_l"/><path class="lkn0kjb2g"/><path class="w1bzx4bce"/>`,
		"fallback": "iconito:bean",
	});
}

export default Component;
