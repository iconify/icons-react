import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rbb69cszp.css';
import '../../css/b/bd4pvgbwl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9gDKKegE"><g class="aql7dnt-u"><circle class="rbb69cszp"/><path class="bd4pvgbwl"/></g></mask></defs><path mask="url(#SVG9gDKKegE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:diamond-ring",
	});
}

export default Component;
