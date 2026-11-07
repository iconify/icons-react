import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/v/v-ccfeb3g.css';
import '../../css/q/q8r41zslw.css';
import '../../css/t/tq4uix4bz.css';
import '../../css/v/vik-4dbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="v-ccfeb3g"/><path class="q8r41zslw"/><path class="tq4uix4bz"/><path class="vik-4dbqt"/>`,
		"fallback": "solar:checklist-minimalistic-bold-duotone",
	});
}

export default Component;
