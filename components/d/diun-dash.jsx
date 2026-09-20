import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbz35uxob.css';
import '../../css/o/ogk33obpt.css';
import '../../css/f/f6jdgbjxg.css';
import '../../css/s/s60bmubhr.css';
import '../../css/o/oya_uezyy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="pbz35uxob"/><path class="ogk33obpt"/><path class="f6jdgbjxg"/><path class="s60bmubhr"/><path class="oya_uezyy"/>`,
		"fallback": "selfhst:diun-dash",
	});
}

export default Component;
