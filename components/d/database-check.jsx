import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/khvchvbjy.css';
import '../../css/r/rxrul0eko.css';
import '../../css/k/kkh-o2bqv.css';
import '../../css/m/mu7hqhcsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="khvchvbjy"/><path class="rxrul0eko"/><path class="kkh-o2bqv"/><path class="mu7hqhcsr"/></g>`,
		"fallback": "streamline-freehand-color:database-check",
	});
}

export default Component;
