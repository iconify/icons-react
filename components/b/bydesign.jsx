import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sas-o7bjt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5YrIXcfC"><path class="sas-o7bjt"/></mask></defs><path mask="url(#SVG5YrIXcfC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bydesign",
	});
}

export default Component;
