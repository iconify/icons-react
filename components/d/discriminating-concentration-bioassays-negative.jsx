import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aed5ofb7l.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsDiscriminatingConcentrationBioassaysNegative0)"><path clip-rule="evenodd" class="aed5ofb7l"/></g><defs><clipPath id="healthiconsDiscriminatingConcentrationBioassaysNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:discriminating-concentration-bioassays-negative",
	});
}

export default Component;
