import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdwcq3bta.css';
import '../../css/s/s865abbii.css';
import '../../css/a/ame6s9x0w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdwcq3bta"/><path class="s865abbii"/><path class="ame6s9x0w"/>`,
		"fallback": "energy-icons:flask-48",
	});
}

export default Component;
