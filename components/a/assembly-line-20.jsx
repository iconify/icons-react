import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_n5ny1ok.css';
import '../../css/m/m35anv3rp.css';
import '../../css/j/jayc3895l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_n5ny1ok"/><path class="m35anv3rp"/><path class="jayc3895l"/>`,
		"fallback": "energy-icons:assembly-line-20",
	});
}

export default Component;
