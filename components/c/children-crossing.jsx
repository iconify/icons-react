import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un0s-ac9h.css';
import '../../css/l/lm02t2s9x.css';
import '../../css/d/d3wazpbzu.css';
import '../../css/e/erivwsp2x.css';
import '../../css/m/mrn8wkozq.css';
import '../../css/e/eaixb3h3p.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un0s-ac9h"/><path class="lm02t2s9x"/><circle class="d3wazpbzu"/><path class="erivwsp2x"/><circle class="mrn8wkozq"/><path class="eaixb3h3p"/>`,
		"fallback": "openmoji:children-crossing",
	});
}

export default Component;
