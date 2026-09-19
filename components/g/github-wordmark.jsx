import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdptjablm.css';
import '../../css/r/rh99p0mbj.css';
import '../../css/b/b27n8hp7k.css';
import '../../css/y/yg15a6-lt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tdptjablm"><path clip-rule="evenodd" class="rh99p0mbj"/><path class="b27n8hp7k"/></g><path class="yg15a6-lt"/>`,
		"fallback": "devicon:github-wordmark",
	});
}

export default Component;
