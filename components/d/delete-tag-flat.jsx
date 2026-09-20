import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x1jumobfq.css';
import '../../css/f/fxr7w4blx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x1jumobfq"/><path class="fxr7w4blx"/></g>`,
		"fallback": "streamline-sharp-color:delete-tag-flat",
	});
}

export default Component;
