import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/t/t1337kq_z.css';
import '../../css/e/elttmdb8p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1yyEZbSz"><g class="aql7dnt-u"><rect class="h9qj9o6mz"/><rect class="t1337kq_z"/><path class="elttmdb8p"/></g></mask></defs><path mask="url(#SVG1yyEZbSz)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:f-zero-key",
	});
}

export default Component;
