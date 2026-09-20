import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sieez-brj.css';
import '../../css/v/v4lyffbho.css';
import '../../css/x/x7_vrbb-f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sieez-brj"/><path class="v4lyffbho"/><path clip-rule="evenodd" class="x7_vrbb-f"/>`,
		"fallback": "qlementine-icons:calculator-16",
	});
}

export default Component;
