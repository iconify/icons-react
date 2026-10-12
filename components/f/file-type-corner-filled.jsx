import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b21cvhnzr.css';
import '../../css/e/eqmcswb4q.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b21cvhnzr"/><path class="eqmcswb4q"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-type-corner-filled",
	});
}

export default Component;
