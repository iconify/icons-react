import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk43r2bac.css';
import '../../css/g/gis6iufnu.css';
import '../../css/w/w0-ba4bwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vk43r2bac"/><path class="gis6iufnu"/><path class="w0-ba4bwd"/></g>`,
		"fallback": "lucide-extended:brush-duotone",
	});
}

export default Component;
