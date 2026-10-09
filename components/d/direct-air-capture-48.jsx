import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n51f5-rcf.css';
import '../../css/z/z947jubke.css';
import '../../css/x/x69n_hb6j.css';
import '../../css/k/k06hl6der.css';
import '../../css/p/p2jrd4xsv.css';
import '../../css/p/pr9ofgl0i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n51f5-rcf"/><path class="z947jubke"/><path class="x69n_hb6j"/><path class="k06hl6der"/><path class="p2jrd4xsv"/><path class="pr9ofgl0i"/>`,
		"fallback": "energy-icons:direct-air-capture-48",
	});
}

export default Component;
