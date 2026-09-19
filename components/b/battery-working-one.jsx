import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d1jvj23-l.css';
import '../../css/q/q0fujjtaq.css';
import '../../css/a/a88f0tbmb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUjEKv7wr"><g class="ft5dv1b6b"><rect class="d1jvj23-l"/><path class="q0fujjtaq"/><path class="a88f0tbmb"/></g></mask></defs><path mask="url(#SVGUjEKv7wr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:battery-working-one",
	});
}

export default Component;
