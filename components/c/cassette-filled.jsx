import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lr51ahzia.css';
import '../../css/a/acqctfqtk.css';
import '../../css/a/a6gtcl42r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lr51ahzia"/><path clip-rule="evenodd" class="acqctfqtk"/><path class="a6gtcl42r"/></g>`,
		"fallback": "reicon:cassette-filled",
	});
}

export default Component;
