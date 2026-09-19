import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/ftpkt8zyt.css';
import '../../css/w/w54428b0o.css';
import '../../css/r/ru9wejb0k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcv6GGdJE"><g class="rohhhzb0l"><path class="ftpkt8zyt"/><circle class="w54428b0o"/><path class="ru9wejb0k"/></g></mask></defs><path mask="url(#SVGcv6GGdJE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-date-one",
	});
}

export default Component;
