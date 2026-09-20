import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/ta3nfdcyf.css';
import '../../css/q/qeq4udb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ta3nfdcyf"/><path class="qeq4udb2r"/></g>`,
		"fallback": "reicon:brush5",
	});
}

export default Component;
