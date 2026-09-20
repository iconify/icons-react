import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziiqrebsl.css';
import '../../css/a/aflixdlah.css';
import '../../css/i/i-_adc_-g.css';
import '../../css/e/euha5s-mc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziiqrebsl"/><path class="aflixdlah"/><path class="i-_adc_-g"/><circle class="euha5s-mc"/>`,
		"fallback": "selfhst:docsight-light",
	});
}

export default Component;
