import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ygpc1b9aj.css';
import '../../css/h/h6a79lkvl.css';
import '../../css/n/n8oahhi7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ygpc1b9aj"/><path class="h6a79lkvl"/><path class="n8oahhi7g"/></g>`,
		"fallback": "reicon:chart6",
	});
}

export default Component;
