import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0vgceb-l.css';
import '../../css/c/cnllsbb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0vgceb-l"/><path class="cnllsbb1h"/>`,
		"fallback": "basil:file-solid",
	});
}

export default Component;
