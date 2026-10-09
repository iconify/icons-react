import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/f/fazkyybfe.css';
import '../../css/x/xynm-9trs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="fazkyybfe"/><path class="xynm-9trs"/>`,
		"fallback": "energy-icons:face-cool-48",
	});
}

export default Component;
