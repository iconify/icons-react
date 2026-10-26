import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uok3q6dkc.css';
import '../../css/s/sf-d6_0vv.css';
import '../../css/g/gp5dk8tef.css';

const viewBox = {"width":365.56,"height":245.56,"left":-2.78,"top":54.22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uok3q6dkc"/><path class="sf-d6_0vv"/><path class="gp5dk8tef"/>`,
		"fallback": "thesvg:cloudevents",
	});
}

export default Component;
