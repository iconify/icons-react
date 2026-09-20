import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgfs6lbzy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgfs6lbzy"/>`,
		"fallback": "pinhead:border-officer-with-open-suitcase",
	});
}

export default Component;
