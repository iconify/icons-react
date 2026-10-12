import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcw_ncbqz.css';
import '../../css/z/zjahz3ydt.css';
import '../../css/u/upgqaocvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcw_ncbqz"/><path class="zjahz3ydt"/><path class="upgqaocvh"/>`,
		"fallback": "lucide-extended:drone-filled",
	});
}

export default Component;
