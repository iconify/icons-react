import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uob4j6bcx.css';
import '../../css/j/jog-_gb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uob4j6bcx"/><path class="jog-_gb5g"/>`,
		"fallback": "lucide-extended:folder-heart-filled",
	});
}

export default Component;
