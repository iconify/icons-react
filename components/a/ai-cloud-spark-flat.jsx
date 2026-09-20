import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rd5-uhdqa.css';
import '../../css/j/jhiv_sbjw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rd5-uhdqa"/><path class="jhiv_sbjw"/></g>`,
		"fallback": "streamline-color:ai-cloud-spark-flat",
	});
}

export default Component;
