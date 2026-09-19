import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wd64l9r9o.css';
import '../../css/g/gz95jzbvo.css';
import '../../css/o/o5ibevbma.css';
import '../../css/m/m_2j5mqeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wd64l9r9o"/><path class="gz95jzbvo"/><path class="o5ibevbma"/><path class="m_2j5mqeo"/></g>`,
		"fallback": "hugeicons:dressing-table-03",
	});
}

export default Component;
