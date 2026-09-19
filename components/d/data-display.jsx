import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/pv-ktibnd.css';
import '../../css/m/msgncjdxc.css';
import '../../css/r/r2bw5qbdy.css';
import '../../css/t/tpzz0kkpc.css';
import '../../css/w/whf7hwbtq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8MumFe1E"><g class="aql7dnt-u"><path class="pv-ktibnd"/><path class="msgncjdxc"/><path class="r2bw5qbdy"/><path class="tpzz0kkpc"/><path class="whf7hwbtq"/></g></mask></defs><path mask="url(#SVG8MumFe1E)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:data-display",
	});
}

export default Component;
