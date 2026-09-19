import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajlkjpb4b.css';
import '../../css/h/h9rqfzyoz.css';
import '../../css/r/r0zu3w3la.css';
import '../../css/x/xfn8g4brb.css';
import '../../css/t/txw36d48f.css';
import '../../css/x/x5ytt_b7h.css';
import '../../css/n/nc7husbtk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajlkjpb4b"/><path class="h9rqfzyoz"/><path class="r0zu3w3la"/><path class="xfn8g4brb"/><path class="txw36d48f"/><path class="x5ytt_b7h"/><path class="nc7husbtk"/>`,
		"fallback": "devicon:css3-wordmark",
	});
}

export default Component;
