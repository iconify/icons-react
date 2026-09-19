import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov8y93bhm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov8y93bhm"/>`,
		"fallback": "devicon:aerospike",
	});
}

export default Component;
