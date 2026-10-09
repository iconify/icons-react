import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/f/f-vejgbix.css';
import '../../css/w/wkf9r370w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="f-vejgbix"/><path class="wkf9r370w"/>`,
		"fallback": "energy-icons:hydrogen-48",
	});
}

export default Component;
