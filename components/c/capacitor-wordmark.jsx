import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2ht3fb4v.css';
import '../../css/q/q8pz_9brq.css';
import '../../css/b/b66km5bbw.css';
import '../../css/o/ol42oeb5z.css';
import '../../css/f/ff0c6m2li.css';
import '../../css/v/v8q8y4blc.css';
import '../../css/z/zaaaoix_r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2ht3fb4v"/><path class="q8pz_9brq"/><path class="b66km5bbw"/><path class="ol42oeb5z"/><path class="ff0c6m2li"/><path class="v8q8y4blc"/><path class="zaaaoix_r"/>`,
		"fallback": "devicon:capacitor-wordmark",
	});
}

export default Component;
