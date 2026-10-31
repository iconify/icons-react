import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu-yry1nz.css';
import '../../css/g/go5cygdbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu-yry1nz"/><path clip-rule="evenodd" class="go5cygdbc"/>`,
		"fallback": "lucide-extended:circle-letter-r-filled",
	});
}

export default Component;
