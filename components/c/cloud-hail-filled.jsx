import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_0y3m6li.css';
import '../../css/b/b6hy8accx.css';
import '../../css/i/igxotebur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_0y3m6li"/><path class="b6hy8accx"/><path class="igxotebur"/>`,
		"fallback": "lucide-extended:cloud-hail-filled",
	});
}

export default Component;
