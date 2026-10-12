import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox6ac-bhz.css';
import '../../css/p/ps-9ixb8e.css';
import '../../css/o/oo9pv9z9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox6ac-bhz"/><path class="ps-9ixb8e"/><path class="oo9pv9z9t"/>`,
		"fallback": "lucide-extended:bring-to-front-filled",
	});
}

export default Component;
