import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6gwrmjs.css';
import '../../css/f/f5sw_jabn.css';
import '../../css/v/vsmhsbbyf.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj6gwrmjs"/><path class="f5sw_jabn"/><path class="vsmhsbbyf"/><path class="x4f46-b2l"/>`,
		"fallback": "solar:file-question-mark-bold-duotone",
	});
}

export default Component;
