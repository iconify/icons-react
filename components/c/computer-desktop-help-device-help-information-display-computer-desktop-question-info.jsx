import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnkbqol6e.css';
import '../../css/q/quo_cqime.css';
import '../../css/l/l-2g-1dte.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnkbqol6e"/><path class="quo_cqime"/><path class="l-2g-1dte"/>`,
		"fallback": "streamline:computer-desktop-help-device-help-information-display-computer-desktop-question-info",
	});
}

export default Component;
