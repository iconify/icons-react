import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cld69v_-y.css';
import '../../css/z/zdiclqbzx.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsDhis2LogoNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="cld69v_-y"/><path class="zdiclqbzx"/></g><defs><clipPath id="healthiconsDhis2LogoNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:dhis2-logo-negative",
	});
}

export default Component;
