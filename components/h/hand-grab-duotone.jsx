import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyn4iqr1o.css';
import '../../css/s/spcg6lt2e.css';
import '../../css/e/egczp81iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zyn4iqr1o"/><path class="spcg6lt2e"/><path class="egczp81iz"/></g>`,
		"fallback": "lucide-extended:hand-grab-duotone",
	});
}

export default Component;
