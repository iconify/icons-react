import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pccfkqbsy.css';
import '../../css/h/hc26bnb7y.css';
import '../../css/b/bp1ojco9h.css';
import '../../css/y/y6lequ7jv.css';
import '../../css/y/yvgdpzb2e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pccfkqbsy"/><path class="hc26bnb7y"/><path class="bp1ojco9h"/><path class="y6lequ7jv"/><path class="yvgdpzb2e"/>`,
		"fallback": "streamline-emojis:backhand-index-pointing-right-1",
	});
}

export default Component;
