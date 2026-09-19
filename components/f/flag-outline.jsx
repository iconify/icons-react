import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ii0ks37cv.css';
import '../../css/c/ca6eh6i6h.css';
import '../../css/e/eedhclziy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flag-outline"><g class="Vector cuyn6tgcc"><path class="ii0ks37cv"/><path clip-rule="evenodd" class="ca6eh6i6h"/><path class="eedhclziy"/></g></g>`,
		"fallback": "cuida:flag-outline",
	});
}

export default Component;
