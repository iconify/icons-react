import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa_is4bzp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNCVvQcbr"><path class="aa_is4bzp"/></mask></defs><path mask="url(#SVGNCVvQcbr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hexagon-strip",
	});
}

export default Component;
