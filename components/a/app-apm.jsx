import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krpjbebjv.css';
import '../../css/k/krmzf_byg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krpjbebjv"/><path class="krmzf_byg ouiIcon__fillSecondary"/>`,
		"fallback": "oui:app-apm",
	});
}

export default Component;
