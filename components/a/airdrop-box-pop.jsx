import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9pschl6t.css';
import '../../css/d/dtl5c7ndw.css';
import '../../css/e/eybefabti.css';
import '../../css/l/l13a_eb2x.css';
import '../../css/t/td_qtqbat.css';
import '../../css/a/a6-i7r6wv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e9pschl6t"/><path class="dtl5c7ndw"/><path class="eybefabti"/><path class="l13a_eb2x"/><path class="td_qtqbat"/><path class="a6-i7r6wv"/></g>`,
		"fallback": "streamline-kameleon-color:airdrop-box-pop",
	});
}

export default Component;
