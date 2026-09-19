import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z32br6ban.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRXUXTcez"><path class="z32br6ban"/></mask></defs><path mask="url(#SVGRXUXTcez)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:block-six",
	});
}

export default Component;
