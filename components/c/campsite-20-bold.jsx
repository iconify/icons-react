import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqvhibb-t.css';
import '../../css/i/ia7-zwuym.css';
import '../../css/z/zghr7o10a.css';
import '../../css/r/r9biv4bfy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqvhibb-t"/><path class="ia7-zwuym"/><path class="zghr7o10a"/><path class="r9biv4bfy"/>`,
		"fallback": "energy-icons:campsite-20-bold",
	});
}

export default Component;
