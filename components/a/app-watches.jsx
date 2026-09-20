import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltsvmv17u.css';
import '../../css/p/pvoys4t1r.css';
import '../../css/n/nr1kobbpa.css';
import '../../css/r/rgdhmtlro.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltsvmv17u"/><path class="pvoys4t1r"/><path class="nr1kobbpa"/><path class="ouiIcon__fillSecondary rgdhmtlro"/>`,
		"fallback": "oui:app-watches",
	});
}

export default Component;
