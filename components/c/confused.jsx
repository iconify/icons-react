import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gshe_di8n.css';
import '../../css/w/ww076bcwj.css';
import '../../css/n/ngo67db0o.css';
import '../../css/d/dy-ttul4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gshe_di8n"/><path class="ww076bcwj"/><path class="ngo67db0o"/><path class="dy-ttul4u"/>`,
		"fallback": "fontisto:confused",
	});
}

export default Component;
