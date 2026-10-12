import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnu5vacfx.css';
import '../../css/q/qcetc5ipd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnu5vacfx"/><path clip-rule="evenodd" class="qcetc5ipd"/>`,
		"fallback": "lucide-extended:image-up-filled",
	});
}

export default Component;
