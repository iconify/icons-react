import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ux3ex7bqw.css';
import '../../css/c/cvkqkhbli.css';
import '../../css/u/uggzizsip.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ux3ex7bqw"/><path class="cvkqkhbli"/><path class="uggzizsip"/></g>`,
		"fallback": "streamline-color:ai-technology-spark-flat",
	});
}

export default Component;
