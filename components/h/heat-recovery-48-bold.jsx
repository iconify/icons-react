import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzlanurfx.css';
import '../../css/x/x5igzyszp.css';
import '../../css/z/zwpgspbzr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzlanurfx"/><path class="x5igzyszp"/><path class="zwpgspbzr"/>`,
		"fallback": "energy-icons:heat-recovery-48-bold",
	});
}

export default Component;
