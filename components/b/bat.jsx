import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0_m-9bfs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzYmnGefN"><path class="n0_m-9bfs"/></mask></defs><path mask="url(#SVGzYmnGefN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bat",
	});
}

export default Component;
