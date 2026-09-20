import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftl1fs6jj.css';
import '../../css/f/fv1vecnlt.css';
import '../../css/f/flan3pe2x.css';
import '../../css/a/ak5u0_npi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftl1fs6jj"/><path class="fv1vecnlt"/><path clip-rule="evenodd" class="flan3pe2x"/><path clip-rule="evenodd" class="ak5u0_npi"/>`,
		"fallback": "selfhst:iammeter-dark",
	});
}

export default Component;
