import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvgr08bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvgr08bym"/>`,
		"fallback": "lucide-extended:footprints-filled",
	});
}

export default Component;
