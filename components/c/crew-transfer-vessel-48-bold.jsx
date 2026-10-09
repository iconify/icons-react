import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2dc9v3fg.css';
import '../../css/j/jwps220zj.css';
import '../../css/b/bdd_6-bdx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2dc9v3fg"/><path class="jwps220zj"/><path class="bdd_6-bdx"/>`,
		"fallback": "energy-icons:crew-transfer-vessel-48-bold",
	});
}

export default Component;
