import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x78bggbaj.css';
import '../../css/u/um2797y-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x78bggbaj"/><path class="um2797y-a"/>`,
		"fallback": "lucide-extended:file-scan-filled",
	});
}

export default Component;
