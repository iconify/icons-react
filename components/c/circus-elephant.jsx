import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/srfelc0jk.css';
import '../../css/r/rbkr4ob7z.css';
import '../../css/r/rft762b9l.css';
import '../../css/x/xj2ox36ks.css';
import '../../css/a/auj6bnblw.css';
import '../../css/w/wj57_jbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="srfelc0jk"/><path class="rbkr4ob7z"/><path class="rft762b9l"/><path class="xj2ox36ks"/><path class="auj6bnblw"/><path class="wj57_jbww"/></g>`,
		"fallback": "streamline-ultimate:circus-elephant",
	});
}

export default Component;
