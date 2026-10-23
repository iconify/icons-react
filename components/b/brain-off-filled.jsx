import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gahn9tbab.css';
import '../../css/r/rpqiizbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gahn9tbab"/><path class="rpqiizbbq"/>`,
		"fallback": "lucide-extended:brain-off-filled",
	});
}

export default Component;
