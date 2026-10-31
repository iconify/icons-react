import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsbbbdb0k.css';
import '../../css/w/w6m22iv5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsbbbdb0k"/><path clip-rule="evenodd" class="w6m22iv5a"/>`,
		"fallback": "lucide-extended:ball-wave-filled",
	});
}

export default Component;
