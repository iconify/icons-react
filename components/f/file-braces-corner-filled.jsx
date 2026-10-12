import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa_mvlblm.css';
import '../../css/f/fubpiudof.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa_mvlblm"/><path class="fubpiudof"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-braces-corner-filled",
	});
}

export default Component;
