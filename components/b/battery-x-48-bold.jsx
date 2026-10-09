import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd4yffbrl.css';
import '../../css/g/gex21tb2f.css';
import '../../css/s/syfylxqea.css';
import '../../css/u/uq11f0fet.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd4yffbrl"/><path class="gex21tb2f"/><path class="syfylxqea"/><path class="uq11f0fet"/>`,
		"fallback": "energy-icons:battery-x-48-bold",
	});
}

export default Component;
