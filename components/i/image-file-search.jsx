import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_600mvup.css';
import '../../css/b/bhngwdwnp.css';
import '../../css/t/t26w6qbaq.css';
import '../../css/l/lf0xgxbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c_600mvup"/><path class="bhngwdwnp"/><path class="t26w6qbaq"/><path class="lf0xgxbmz"/>`,
		"fallback": "streamline-freehand:image-file-search",
	});
}

export default Component;
