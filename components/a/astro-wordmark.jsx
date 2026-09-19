import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0z8i7m6l.css';
import '../../css/t/tr2lgt9jh.css';
import '../../css/y/y8s2o56ld.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0z8i7m6l"/><path class="tr2lgt9jh"/><path class="y8s2o56ld"/>`,
		"fallback": "devicon:astro-wordmark",
	});
}

export default Component;
