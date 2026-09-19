import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blyiy0b4o.css';
import '../../css/l/lu-nqrbmy.css';
import '../../css/t/tmatxnbbk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHlsFAdQb"><g class="blyiy0b4o"><path class="lu-nqrbmy"/><path class="tmatxnbbk"/></g></mask></defs><path mask="url(#SVGHlsFAdQb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:dark-mode",
	});
}

export default Component;
