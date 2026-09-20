import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c2midr-dj.css';
import '../../css/u/uk8fi2bow.css';
import '../../css/c/crvrn-wsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="c2midr-dj"/><path class="uk8fi2bow"/><rect class="crvrn-wsh"/></g>`,
		"fallback": "lucide:between-vertical-start",
	});
}

export default Component;
