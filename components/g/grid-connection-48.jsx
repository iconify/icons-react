import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syc8pyb5a.css';
import '../../css/i/ia80czbys.css';
import '../../css/j/jmjcjlbdg.css';
import '../../css/k/ko7r8rsvb.css';
import '../../css/c/cxti3cbok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syc8pyb5a"/><path class="ia80czbys"/><path class="jmjcjlbdg"/><path class="ko7r8rsvb"/><path class="cxti3cbok"/>`,
		"fallback": "energy-icons:grid-connection-48",
	});
}

export default Component;
