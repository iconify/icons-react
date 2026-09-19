import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/r/rj75s3mpj.css';
import '../../css/a/at3qv7bjo.css';
import '../../css/q/q6p4_jbmf.css';
import '../../css/g/gw9ia0bov.css';
import '../../css/d/djg0w9bxu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="rj75s3mpj"/><path class="at3qv7bjo"/><path class="q6p4_jbmf"/><path class="gw9ia0bov"/><path class="djg0w9bxu"/><line x1="20" x2="20" y1="27" y2="44"/><line x1="28" x2="28" y1="27" y2="44"/></g>`,
		"fallback": "icon-park:cake-five",
	});
}

export default Component;
