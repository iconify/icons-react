import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q4n69vbqc.css';
import '../../css/t/tn9ah2cql.css';
import '../../css/u/u8u9_5smu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q4n69vbqc"/><path class="tn9ah2cql"/><rect class="u8u9_5smu"/></g>`,
		"fallback": "lucide:clipboard-copy",
	});
}

export default Component;
