import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yxxwwfbrl.css';
import '../../css/m/meqfxn0av.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yxxwwfbrl"/><path class="meqfxn0av"/></g>`,
		"fallback": "streamline-color:ai-prompt-spark-flat",
	});
}

export default Component;
