import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y21wu2bzg.css';
import '../../css/y/yx2ku0bwi.css';
import '../../css/f/fkdf57y9p.css';
import '../../css/k/kkjgtdb3a.css';
import '../../css/j/jxr4rkmxa.css';
import '../../css/q/qqgs22b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y21wu2bzg"/><path class="yx2ku0bwi"/><path class="fkdf57y9p"/><path class="kkjgtdb3a"/><path class="jxr4rkmxa"/><path class="qqgs22b2y"/></g>`,
		"fallback": "streamline-ultimate:family-child-play-ball-warning",
	});
}

export default Component;
