import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lcee_744z.css';
import '../../css/m/mb-fyjb0d.css';
import '../../css/q/qm1qe08zp.css';
import '../../css/d/dtwjw7ica.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9oR5Ac6T"><g class="aql7dnt-u"><path class="lcee_744z"/><path class="mb-fyjb0d"/><path class="qm1qe08zp"/><path class="dtwjw7ica"/></g></mask></defs><path mask="url(#SVG9oR5Ac6T)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:database-position",
	});
}

export default Component;
