import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmbrbipep.css';
import '../../css/b/bcr477b8x.css';
import '../../css/b/bp242uqss.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="clr-i-outline clr-i-outline-path-1 cmbrbipep"/><path class="bcr477b8x clr-i-outline clr-i-outline-path-2"/><path class="bp242uqss clr-i-outline clr-i-outline-path-3"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:error-standard-line",
	});
}

export default Component;
