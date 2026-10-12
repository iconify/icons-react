import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-9w70bia.css';
import '../../css/d/dadvgibzl.css';
import '../../css/r/rb9rifbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z-9w70bia"/><path class="dadvgibzl"/><path class="rb9rifbfs"/></g>`,
		"fallback": "lucide-extended:ham-duotone",
	});
}

export default Component;
