import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwreatbrt.css';
import '../../css/y/yg151vbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwreatbrt"/><path clip-rule="evenodd" class="yg151vbqt"/>`,
		"fallback": "lucide-extended:database-cog-filled",
	});
}

export default Component;
