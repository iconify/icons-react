import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht2v78f-m.css';
import '../../css/u/u431zobpm.css';
import '../../css/c/cbzm5ebwg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht2v78f-m"/><path class="u431zobpm"/><path class="cbzm5ebwg"/>`,
		"fallback": "energy-icons:diode-48-bold",
	});
}

export default Component;
