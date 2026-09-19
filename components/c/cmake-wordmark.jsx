import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-kkqni0e.css';
import '../../css/b/bj9vs0gqe.css';
import '../../css/n/nfoh-ac5v.css';
import '../../css/e/ecbvgib7m.css';
import '../../css/w/wobnetymm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-kkqni0e"/><path class="bj9vs0gqe"/><path class="nfoh-ac5v"/><path class="ecbvgib7m"/><path class="wobnetymm"/>`,
		"fallback": "devicon:cmake-wordmark",
	});
}

export default Component;
