import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uumdjbb7e.css';
import '../../css/g/gph90cbak.css';
import '../../css/o/ojg46yc6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uumdjbb7e"/><path class="gph90cbak"/><path class="ojg46yc6z"/></g>`,
		"fallback": "streamline-sharp-color:ai-generate-voice-spark-2-flat",
	});
}

export default Component;
