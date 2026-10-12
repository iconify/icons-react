import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl3z5hb3m.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tl3z5hb3m"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-axis-3d-filled",
	});
}

export default Component;
