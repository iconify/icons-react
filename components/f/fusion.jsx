import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6468db5n.css';
import '../../css/z/z6yg-qblf.css';
import '../../css/v/v-u89ackx.css';
import '../../css/l/l5ibq-bxt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6468db5n"/><path class="z6yg-qblf"/><path class="v-u89ackx"/><path class="l5ibq-bxt"/>`,
		"fallback": "devicon:fusion",
	});
}

export default Component;
