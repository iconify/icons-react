import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg159x5tx.css';
import '../../css/o/o-7dnvbon.css';
import '../../css/j/jowk_gb7h.css';
import '../../css/d/dqh3ukbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg159x5tx"/><path class="o-7dnvbon"/><path class="jowk_gb7h"/><path class="dqh3ukbna"/>`,
		"fallback": "token:arbi",
	});
}

export default Component;
