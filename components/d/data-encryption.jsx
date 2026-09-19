import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqugpjbox.css';
import '../../css/o/ohddqdbak.css';
import '../../css/k/kfydo0bxj.css';
import '../../css/c/cvhp0drkw.css';
import '../../css/p/pdq_5pb9s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqugpjbox"/><g class="ohddqdbak"><path class="kfydo0bxj"/><path class="cvhp0drkw"/></g><path class="pdq_5pb9s"/>`,
		"fallback": "flat-color-icons:data-encryption",
	});
}

export default Component;
