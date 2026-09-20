import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb3q4-ebi.css';
import '../../css/h/hf4na_b9p.css';
import '../../css/w/wioby4b9s.css';
import '../../css/r/r7n51--5c.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb3q4-ebi"/><path class="hf4na_b9p"/><path class="wioby4b9s"/><path class="r7n51--5c"/>`,
		"fallback": "medical-icon:i-pathology",
	});
}

export default Component;
