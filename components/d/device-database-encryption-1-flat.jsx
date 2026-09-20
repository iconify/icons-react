import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/da6c-4ean.css';
import '../../css/n/ngdnb3beq.css';
import '../../css/e/ekleq9h-f.css';
import '../../css/n/nhvi-4b0p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="da6c-4ean"/><path clip-rule="evenodd" class="ngdnb3beq"/><path class="ekleq9h-f"/><path class="nhvi-4b0p"/></g>`,
		"fallback": "streamline-plump-color:device-database-encryption-1-flat",
	});
}

export default Component;
