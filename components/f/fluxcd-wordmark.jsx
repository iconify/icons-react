import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df_0m4b0p.css';
import '../../css/w/wd3q3wb6b.css';
import '../../css/v/v9uawug3k.css';
import '../../css/f/fm8efkbgg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df_0m4b0p"/><path class="wd3q3wb6b"/><path class="v9uawug3k"/><path class="fm8efkbgg"/>`,
		"fallback": "devicon:fluxcd-wordmark",
	});
}

export default Component;
