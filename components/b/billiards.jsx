import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjp3m3bor.css';
import '../../css/t/tn3ef2i2f.css';
import '../../css/b/b2fgv7b-a.css';
import '../../css/w/we48irbvn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjp3m3bor"/><path class="tn3ef2i2f"/><path class="b2fgv7b-a"/><path class="we48irbvn"/>`,
		"fallback": "fxemoji:billiards",
	});
}

export default Component;
