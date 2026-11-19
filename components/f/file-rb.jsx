import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m76y4kbws.css';
import '../../css/r/r9jq9e8nw.css';
import '../../css/l/laxh4nbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m76y4kbws"/><path class="r9jq9e8nw"/><path class="laxh4nbbn"/></g>`,
		"fallback": "andrsrxn:file-rb",
	});
}

export default Component;
