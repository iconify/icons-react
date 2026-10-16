import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he4xe0b7t.css';
import '../../css/c/cgnwxytdv.css';
import '../../css/o/orci3qbbo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he4xe0b7t"/><path class="cgnwxytdv"/><path class="orci3qbbo"/>`,
		"fallback": "energy-icons:gangway-48",
	});
}

export default Component;
