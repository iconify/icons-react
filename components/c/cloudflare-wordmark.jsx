import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4h2k05ja.css';
import '../../css/u/uqpui-bgw.css';
import '../../css/h/hiiiijb5v.css';
import '../../css/g/g9wxr7i5b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4h2k05ja"/><path class="uqpui-bgw"/><path class="hiiiijb5v"/><path class="g9wxr7i5b"/>`,
		"fallback": "devicon:cloudflare-wordmark",
	});
}

export default Component;
