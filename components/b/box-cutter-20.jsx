import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6ztnvvyu.css';
import '../../css/g/gf1alnb4d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6ztnvvyu"/><path class="gf1alnb4d"/>`,
		"fallback": "energy-icons:box-cutter-20",
	});
}

export default Component;
