import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mj5qymupp.css';
import '../../css/a/a4v0hrbww.css';
import '../../css/z/zwd2s8b6h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG111BXhBY"><g class="ft5dv1b6b"><path class="mj5qymupp"/><path class="a4v0hrbww"/><path class="zwd2s8b6h"/></g></mask></defs><path mask="url(#SVG111BXhBY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:clothes-windbreaker",
	});
}

export default Component;
