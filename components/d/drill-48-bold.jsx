import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vneqqyb4m.css';
import '../../css/k/k4vjtezta.css';
import '../../css/w/w3ugkacjg.css';
import '../../css/o/ojfmzjr6f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vneqqyb4m"/><path class="k4vjtezta"/><path class="w3ugkacjg"/><path class="ojfmzjr6f"/>`,
		"fallback": "energy-icons:drill-48-bold",
	});
}

export default Component;
