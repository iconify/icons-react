import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miig5dbtw.css';
import '../../css/d/dp_w-124f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miig5dbtw"/><path class="dp_w-124f"/>`,
		"fallback": "tdesign:image-edit-filled",
	});
}

export default Component;
