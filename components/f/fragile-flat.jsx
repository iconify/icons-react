import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m9-1dabrv.css';
import '../../css/i/ikmalgvlr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m9-1dabrv"/><path class="ikmalgvlr"/></g>`,
		"fallback": "streamline-sharp-color:fragile-flat",
	});
}

export default Component;
