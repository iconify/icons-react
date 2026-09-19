import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yr2a3nb4f.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsChartLineStackedNegative0)"><path clip-rule="evenodd" class="yr2a3nb4f"/></g><defs><clipPath id="healthiconsChartLineStackedNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:chart-line-stacked-negative",
	});
}

export default Component;
