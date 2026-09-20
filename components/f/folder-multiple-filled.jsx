import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/p/pk1xpw.css';
import '../../css/q/qv815t.css';
import '../../css/y/y4wbml.css';
import '../../css/v/vta48p.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-290yip.css';
import '../../css/d/d-zqdz1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew pk1xpw"/><path class="iw1iew qv815t y4wbml"/><path class="iw1iew vta48p y4wbml"/>`,
		"fallback": "line-md:folder-multiple-filled",
	});
}

export default Component;
