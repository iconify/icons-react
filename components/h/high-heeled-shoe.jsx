import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm4jru0hp.css';
import '../../css/c/c1ndsvxfv.css';
import '../../css/w/w0ghjfb3z.css';
import '../../css/l/lox5l9b4y.css';
import '../../css/m/mk1xl7b4f.css';
import '../../css/r/rc9bp_bvr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm4jru0hp"/><path class="c1ndsvxfv"/><path class="w0ghjfb3z"/><path class="lox5l9b4y"/><path class="mk1xl7b4f"/><path class="rc9bp_bvr"/>`,
		"fallback": "streamline-emojis:high-heeled-shoe",
	});
}

export default Component;
