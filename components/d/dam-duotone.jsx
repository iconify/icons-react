import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wyg7z5kjh.css';
import '../../css/s/suqmocc3n.css';
import '../../css/d/dft9gzb8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wyg7z5kjh"/><path class="suqmocc3n"/><path class="dft9gzb8f"/></g>`,
		"fallback": "lucide-extended:dam-duotone",
	});
}

export default Component;
