import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrq51hlai.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGijWl8bxE"><path clip-rule="evenodd" class="qrq51hlai"/></mask></defs><path mask="url(#SVGijWl8bxE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:error",
	});
}

export default Component;
