import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/f/fr-v094-v.css';
import '../../css/y/y0dxaabis.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGpUOhc6T"><g class="ufeehvblu"><rect class="g47cb4b4t"/><path class="fr-v094-v"/><path class="y0dxaabis"/></g></mask></defs><path mask="url(#SVGGpUOhc6T)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:figma",
	});
}

export default Component;
