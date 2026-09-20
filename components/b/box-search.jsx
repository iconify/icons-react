import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gcwqm4-4k.css';
import '../../css/l/lekmlssml.css';
import '../../css/a/algty2bhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gcwqm4-4k"/><path class="lekmlssml"/><path class="algty2bhe"/></g>`,
		"fallback": "reicon:box-search",
	});
}

export default Component;
