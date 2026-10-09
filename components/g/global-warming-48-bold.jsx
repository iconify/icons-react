import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx-xmmb2t.css';
import '../../css/o/ohm3jmbqg.css';
import '../../css/m/mzottzalv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx-xmmb2t"/><path class="ohm3jmbqg"/><path class="mzottzalv"/>`,
		"fallback": "energy-icons:global-warming-48-bold",
	});
}

export default Component;
