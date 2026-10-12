import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9-ptid3t.css';
import '../../css/e/eicvtdjeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y9-ptid3t"/><path class="eicvtdjeu"/></g>`,
		"fallback": "lucide-extended:app-window-duotone",
	});
}

export default Component;
