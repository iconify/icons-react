import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/ltloy5mch.css';
import '../../css/u/u8oyidbkb.css';
import '../../css/z/zni6d3aeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ltloy5mch"/><path class="u8oyidbkb"/><path class="zni6d3aeh"/></g>`,
		"fallback": "streamline-freehand:business-metaphor-lucky-cat",
	});
}

export default Component;
