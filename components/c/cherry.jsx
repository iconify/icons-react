import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/w/wt1yaac6x.css';
import '../../css/a/a647vnb7z.css';
import '../../css/j/jm6531b2w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOGikzphV"><g class="hv130ab-t"><circle class="wt1yaac6x"/><circle class="a647vnb7z"/><path class="jm6531b2w"/></g></mask></defs><path mask="url(#SVGOGikzphV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cherry",
	});
}

export default Component;
