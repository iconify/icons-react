import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmaojwd9t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0F4f16iy"><path class="hmaojwd9t"/></mask></defs><path mask="url(#SVG0F4f16iy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:fist",
	});
}

export default Component;
