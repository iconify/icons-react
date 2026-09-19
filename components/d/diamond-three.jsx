import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh5my5ilm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1xKdadUH"><path class="rh5my5ilm"/></mask></defs><path mask="url(#SVG1xKdadUH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:diamond-three",
	});
}

export default Component;
