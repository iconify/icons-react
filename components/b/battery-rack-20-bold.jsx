import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebokfknlf.css';
import '../../css/k/k84i5l5cj.css';
import '../../css/d/dro-jbb6w.css';
import '../../css/r/rezyr22ot.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebokfknlf"/><path class="k84i5l5cj"/><path class="dro-jbb6w"/><path class="rezyr22ot"/>`,
		"fallback": "energy-icons:battery-rack-20-bold",
	});
}

export default Component;
