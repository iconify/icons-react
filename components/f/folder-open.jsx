import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qsv66-bey.css';
import '../../css/f/f3nwbjeex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qsv66-bey"/><path class="f3nwbjeex"/></g>`,
		"fallback": "mage:folder-open",
	});
}

export default Component;
