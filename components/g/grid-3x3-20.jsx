import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewn1ke3br.css';
import '../../css/e/euk2bdbjj.css';
import '../../css/c/cdid3gb_h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewn1ke3br"/><path class="euk2bdbjj"/><path class="cdid3gb_h"/>`,
		"fallback": "energy-icons:grid-3x3-20",
	});
}

export default Component;
