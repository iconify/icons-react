import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b34w3xb6i.css';
import '../../css/o/osw6v2bcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b34w3xb6i"/><path class="osw6v2bcj"/></g>`,
		"fallback": "andrsrxn:compass-tool",
	});
}

export default Component;
