import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvql5q15h.css';
import '../../css/v/v8spg71sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvql5q15h"/><path clip-rule="evenodd" class="v8spg71sl"/>`,
		"fallback": "lucide-extended:compass-filled",
	});
}

export default Component;
