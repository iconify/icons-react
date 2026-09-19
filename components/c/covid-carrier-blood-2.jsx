import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/girafxs9b.css';
import '../../css/c/cyluz262a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="girafxs9b"/><path class="cyluz262a"/></g>`,
		"fallback": "covid:covid-carrier-blood-2",
	});
}

export default Component;
