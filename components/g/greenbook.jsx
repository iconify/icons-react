import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz40jli7i.css';
import '../../css/e/ep-b8qb4e.css';
import '../../css/v/v8oskacjp.css';
import '../../css/o/o6g1-kwkw.css';
import '../../css/d/d6ens9bnt.css';
import '../../css/u/ufez02bha.css';
import '../../css/d/dygyyv64v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz40jli7i"/><circle class="ep-b8qb4e"/><path class="v8oskacjp"/><path class="o6g1-kwkw"/><path class="d6ens9bnt"/><path class="ufez02bha"/><path class="dygyyv64v"/>`,
		"fallback": "fxemoji:greenbook",
	});
}

export default Component;
