import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-loasbnk.css';
import '../../css/a/avm801z_y.css';
import '../../css/y/y467enbsf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzvdhfcNc"><g class="ft5dv1b6b"><circle class="w-loasbnk"/><circle transform="matrix(-1 0 0 1 24 24)" class="avm801z_y"/><path class="y467enbsf"/></g></mask></defs><path mask="url(#SVGzvdhfcNc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:auto-focus",
	});
}

export default Component;
