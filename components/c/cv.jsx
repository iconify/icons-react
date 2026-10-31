import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzeqlybma.css';
import '../../css/w/wyts8z33a.css';
import '../../css/g/gpd4gebnv.css';
import '../../css/c/cfcn3jbsa.css';

const viewBox = {"width":301,"height":177};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mzeqlybma"/><path class="wyts8z33a"/><path class="gpd4gebnv"/><path class="cfcn3jbsa"/></g>`,
		"fallback": "cif:cv",
	});
}

export default Component;
