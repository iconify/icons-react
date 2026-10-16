import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpel3hezc.css';
import '../../css/c/cij4w6b7p.css';
import '../../css/g/gscp8awvo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpel3hezc"/><path class="cij4w6b7p"/><path class="gscp8awvo"/>`,
		"fallback": "energy-icons:chart-area-stacked-48-bold",
	});
}

export default Component;
