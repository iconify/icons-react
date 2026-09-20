import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j9rwlpb5i.css';
import '../../css/r/r-5u3cccj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j9rwlpb5i"/><path class="r-5u3cccj"/></g>`,
		"fallback": "streamline-freehand:design-process-fibonacci",
	});
}

export default Component;
