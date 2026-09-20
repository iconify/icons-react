import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btxwembdd.css';
import '../../css/x/xx9h8gkna.css';

const viewBox = {"width":5000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btxwembdd"/><path class="xx9h8gkna"/>`,
		"fallback": "thesvg-color:amplitude",
	});
}

export default Component;
